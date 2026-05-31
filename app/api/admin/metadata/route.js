import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

function cleanVersion(value) {
  return String(value || "1.0.0").replace(/[^0-9A-Za-z._-]/g, "").slice(0, 32) || "1.0.0";
}

function cleanText(value, max = 2000) {
  return String(value || "").replace(/[<>]/g, "").slice(0, max);
}

function cleanSha256(value) {
  const hash = String(value || "").trim().toLowerCase();
  return /^[a-f0-9]{64}$/.test(hash) ? hash : "";
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!process.env.ADMIN_PASSWORD) return NextResponse.json({ error: "ADMIN_PASSWORD env ayarı eksik." }, { status: 500 });
    if (body.password !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error: "Admin şifresi yanlış." }, { status: 401 });
    if (!body.blob?.url) return NextResponse.json({ error: "APK blob bilgisi eksik." }, { status: 400 });

    const version = cleanVersion(body.version);
    const sha256 = cleanSha256(body.sha256);
    if (!sha256) return NextResponse.json({ error: "Geçerli SHA-256 doğrulama kodu eksik." }, { status: 400 });

    const metadata = {
      appName: "QasimFlix",
      version,
      notes: cleanText(body.notes),
      forceUpdate: Boolean(body.forceUpdate),
      originalName: cleanText(body.originalName || `QasimFlix-v${version}-release-signed.apk`, 160),
      sourceFileName: cleanText(body.sourceFileName, 160),
      size: Number(body.size || 0),
      sha256,
      apkUrl: body.blob.url,
      downloadUrl: body.blob.downloadUrl || `${body.blob.url}?download=1`,
      pathname: body.blob.pathname,
      publishedAt: new Date().toISOString(),
      securityNote: "Android, Google Play dışından indirilen APK dosyalarında güvenlik uyarısı gösterebilir. Bu uyarı tek başına dosyanın virüslü olduğu anlamına gelmez.",
    };

    const blob = await put("qasimflix/latest.json", JSON.stringify(metadata, null, 2), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60,
    });

    return NextResponse.json({ ok: true, metadata, metadataBlob: blob });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Son sürüm bilgisi kaydedilemedi." }, { status: 500 });
  }
}
