"use client";
import { upload } from "@vercel/blob/client";
import { useState } from "react";

function formatBytes(n) {
  if (!n) return "-";
  let value = Number(n);
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i += 1;
  }
  return `${value.toFixed(i ? 1 : 0)} ${units[i]}`;
}

async function sha256File(file) {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [version, setVersion] = useState("1.0.6");
  const [notes, setNotes] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);
  const [file, setFile] = useState(null);
  const [sha256, setSha256] = useState("");
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("Yeni APK seç ve yükle. APK seçilince SHA-256 doğrulama kodu otomatik hesaplanır.");

  async function selectFile(nextFile) {
    setFile(nextFile || null);
    setSha256("");
    setProgress(0);
    if (!nextFile) {
      setStatus("Yeni APK seç ve yükle.");
      return;
    }
    if (!nextFile.name.toLowerCase().endsWith(".apk")) {
      setStatus("Sadece .apk dosyası seçebilirsin.");
      return;
    }
    try {
      setStatus("SHA-256 doğrulama kodu hesaplanıyor...");
      const hash = await sha256File(nextFile);
      setSha256(hash);
      setStatus(`APK hazır: ${nextFile.name} • ${formatBytes(nextFile.size)} • SHA-256 hesaplandı.`);
    } catch (error) {
      setStatus("SHA-256 hesaplanamadı: " + (error.message || "Bilinmeyen hata"));
    }
  }

  async function submit(e) {
    e.preventDefault();
    if (!password.trim()) return setStatus("Admin şifresi gerekli.");
    if (!file) return setStatus("Bilgisayardan APK dosyası seç.");
    if (!file.name.toLowerCase().endsWith(".apk")) return setStatus("Sadece .apk dosyası yükleyebilirsin.");
    if (!sha256 || sha256.length !== 64) return setStatus("SHA-256 doğrulama kodu hazır değil. APK dosyasını tekrar seç.");

    try {
      setBusy(true);
      setProgress(0);
      setStatus("APK Vercel Blob alanına yükleniyor...");
      const safe = version.replace(/[^a-zA-Z0-9._-]/g, "-") || "release";
      const pathname = `qasimflix/apk/QasimFlix-v${safe}-release-signed-${Date.now()}.apk`;
      const blob = await upload(pathname, file, {
        access: "public",
        handleUploadUrl: "/api/upload",
        multipart: true,
        contentType: "application/vnd.android.package-archive",
        clientPayload: JSON.stringify({ password }),
        onUploadProgress: ({ percentage }) => setProgress(Math.round(percentage || 0)),
      });

      setStatus("APK yüklendi, son sürüm bilgisi kaydediliyor...");
      const res = await fetch("/api/admin/metadata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          version,
          notes,
          forceUpdate,
          originalName: `QasimFlix-v${safe}-release-signed.apk`,
          sourceFileName: file.name,
          size: file.size,
          sha256,
          blob,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Metadata kaydedilemedi.");
      setProgress(100);
      setStatus("Tamamlandı. Ana sayfada yeni APK, SHA-256 kodu ve güven açıklaması görünecek.");
    } catch (err) {
      setStatus("Hata: " + err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="admin-page">
      <section className="admin-card">
        <div className="admin-head">
          <img src="/qasimflix.png" alt="QasimFlix" />
          <div>
            <h1 style={{ margin: 0, fontSize: 34 }}>APK Admin Paneli</h1>
            <p className="desc" style={{ margin: "6px 0 0" }}>Yeni APK dosyasını yükle, sürüm bilgisini yaz ve güven doğrulama kodunu yayınla.</p>
          </div>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="field">
            <label>Admin şifresi</label>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="ADMIN_PASSWORD" />
          </div>

          <div className="field">
            <label>APK dosyası</label>
            <input className="input" type="file" accept=".apk,application/vnd.android.package-archive" onChange={(e) => selectFile(e.target.files?.[0] || null)} />
          </div>

          {file ? (
            <div className="status">
              <strong>Seçilen dosya:</strong> {file.name}<br />
              <strong>Boyut:</strong> {formatBytes(file.size)}<br />
              <strong>SHA-256:</strong> <code>{sha256 || "Hesaplanıyor..."}</code>
            </div>
          ) : null}

          <div className="field">
            <label>Sürüm</label>
            <input className="input" value={version} onChange={(e) => setVersion(e.target.value)} placeholder="1.0.6" />
          </div>

          <div className="field">
            <label>Güncelleme notları</label>
            <textarea className="input" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Örn: Yeni logo eklendi, player düzeltildi..." />
          </div>

          <label style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,.82)" }}>
            <input type="checkbox" checked={forceUpdate} onChange={(e) => setForceUpdate(e.target.checked)} /> Zorunlu güncelleme olarak işaretle
          </label>

          <div className="progress"><span style={{ width: `${progress}%` }} /></div>
          <div className="status">{status}</div>
          <button className="btn btn-primary" disabled={busy}>{busy ? `Yükleniyor... %${progress}` : "APK yükle ve yayınla"}</button>
          <a className="btn btn-soft" href="/">Ana sayfaya dön</a>
        </form>
      </section>
    </main>
  );
}
