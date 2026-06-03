"use client";
import { useEffect, useMemo, useState } from "react";

const LANGS = [
  ["tr", "Türkçe"],
  ["en", "English"],
  ["ar", "العربية"],
  ["es", "Español"],
  ["it", "Italiano"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["en-GB", "English UK"],
  ["ru", "Русский"],
  ["zh", "中文"],
];

const T = {
  tr: {
    choose: "Dil seç",
    chooseDesc: "SineQ APK indirme sayfasını hangi dilde kullanmak istersin?",
    badge: "Android APK",
    desc: "En güncel SineQ Android uygulamasını resmi indirme sayfasından güvenli ve kontrollü şekilde indirebilirsin.",
    download: "Resmi APK indir",
    noApk: "APK henüz yüklenmedi",
    version: "Sürüm",
    size: "Boyut",
    updated: "Güncellendi",
    admin: "Admin",
    language: "Dil",
    notes: "Güncelleme notları",
    loading: "Yükleniyor...",
    official: "Resmi SineQ APK",
    signed: "İmzalı release sürüm",
    warningTitle: "Uyarı neden çıkıyor?",
    warningText: "Android veya tarayıcı, Play Store dışından indirilen APK dosyalarında 'zararlı olabilir' uyarısı gösterebilir. Bu uyarı çoğu zaman APK dosya türü ve bilinmeyen kaynak kurulumu nedeniyle çıkar.",
    trustTitle: "Güven için ne yaptık?",
    trustText: "Dosya adı, sürüm, boyut, yayın tarihi ve SHA-256 doğrulama kodu burada gösterilir. Kullanıcı indirdiği dosyanın aynı dosya olduğunu kontrol edebilir.",
    hash: "SHA-256",
    copy: "Kopyala",
    copied: "Kopyalandı",
    notAvailable: "Henüz yok",
    installTitle: "Kurulumdan önce bilgilendirme",
    installSteps: [
      "APK'yı sadece bu resmi SineQ sayfasından indir.",
      "Android uyarı gösterirse dosya türü APK olduğu için normal olabilir; metni dikkatlice oku.",
      "Dosya adı, sürüm ve SHA-256 kodunun bu sayfadaki bilgilerle eşleştiğini kontrol et.",
      "Kurulumdan sonra uygulama yalnızca SineQ sitesini uygulama içinde açar.",
    ],
    userNoteTitle: "Kullanıcıya açıklama",
    userNote: "Bu APK, SineQ'nun resmi imzalı Android sürümüdür. Android, Play Store dışından indirilen APK dosyalarında güvenlik uyarısı gösterebilir; bu uyarı tek başına dosyanın virüslü olduğu anlamına gelmez.",
  },
  en: {
    choose: "Choose language",
    chooseDesc: "Which language do you want to use on the SineQ APK download page?",
    badge: "Android APK",
    desc: "Download the latest SineQ Android app from the official download page with clear version and file verification details.",
    download: "Download official APK",
    noApk: "APK has not been uploaded yet",
    version: "Version",
    size: "Size",
    updated: "Updated",
    admin: "Admin",
    language: "Language",
    notes: "Update notes",
    loading: "Loading...",
    official: "Official SineQ APK",
    signed: "Signed release build",
    warningTitle: "Why does a warning appear?",
    warningText: "Android or the browser may warn about APK files installed outside Google Play. This usually happens because the file type is executable and comes from an unknown source.",
    trustTitle: "Trust and verification",
    trustText: "The filename, version, size, publish date and SHA-256 checksum are shown here so users can verify the downloaded file.",
    hash: "SHA-256",
    copy: "Copy",
    copied: "Copied",
    notAvailable: "Not available yet",
    installTitle: "Before installing",
    installSteps: [
      "Download the APK only from this official SineQ page.",
      "If Android shows a warning, read it carefully; APK warnings can be normal for sideloaded apps.",
      "Check that filename, version and SHA-256 match the details on this page.",
      "After installation, the app opens only the SineQ website inside the app.",
    ],
    userNoteTitle: "User explanation",
    userNote: "This APK is the official signed Android release of SineQ. Android may show a security warning for APKs downloaded outside Google Play; the warning alone does not mean the file is infected.",
  },
  ar: {
    choose: "اختر اللغة",
    chooseDesc: "ما اللغة التي تريد استخدامها في صفحة تحميل تطبيق SineQ؟",
    badge: "تطبيق أندرويد",
    desc: "حمّل أحدث إصدار من تطبيق SineQ للأندرويد من الصفحة الرسمية مع معلومات الإصدار والتحقق.",
    download: "تحميل APK الرسمي",
    noApk: "لم يتم رفع ملف APK بعد",
    version: "الإصدار",
    size: "الحجم",
    updated: "آخر تحديث",
    admin: "لوحة الإدارة",
    language: "اللغة",
    notes: "ملاحظات التحديث",
    loading: "جارٍ التحميل...",
    official: "APK الرسمي لـ SineQ",
    signed: "نسخة موقعة للإصدار",
    warningTitle: "لماذا يظهر التحذير؟",
    warningText: "قد يعرض Android أو المتصفح تحذيرًا عند تحميل ملفات APK من خارج Google Play. غالبًا يظهر ذلك لأن الملف قابل للتثبيت ومن مصدر خارجي.",
    trustTitle: "التحقق والثقة",
    trustText: "يتم عرض اسم الملف والإصدار والحجم وتاريخ النشر ورمز SHA-256 حتى يتمكن المستخدم من التحقق من الملف.",
    hash: "SHA-256",
    copy: "نسخ",
    copied: "تم النسخ",
    notAvailable: "غير متوفر بعد",
    installTitle: "قبل التثبيت",
    installSteps: ["حمّل APK فقط من صفحة SineQ الرسمية.", "إذا ظهر تحذير Android فاقرأه جيدًا؛ قد يكون طبيعيًا لتطبيقات APK من خارج المتجر.", "تحقق من اسم الملف والإصدار ورمز SHA-256.", "بعد التثبيت يفتح التطبيق موقع SineQ فقط داخل التطبيق."],
    userNoteTitle: "توضيح للمستخدم",
    userNote: "هذا هو الإصدار الرسمي الموقّع لتطبيق SineQ على Android. قد يظهر Android تحذيرًا لملفات APK من خارج Google Play؛ والتحذير وحده لا يعني أن الملف مصاب.",
  },
  es: {
    choose: "Elegir idioma",
    chooseDesc: "¿En qué idioma quieres usar la página de descarga de SineQ APK?",
    badge: "Android APK",
    desc: "Descarga la app Android oficial de SineQ con detalles de versión y verificación del archivo.",
    download: "Descargar APK oficial",
    noApk: "Aún no se ha subido el APK",
    version: "Versión",
    size: "Tamaño",
    updated: "Actualizado",
    admin: "Admin",
    language: "Idioma",
    notes: "Notas de actualización",
    loading: "Cargando...",
    official: "APK oficial de SineQ",
    signed: "Versión release firmada",
    warningTitle: "¿Por qué aparece una advertencia?",
    warningText: "Android o el navegador pueden advertir sobre APK instalados fuera de Google Play. Normalmente ocurre por el tipo de archivo y la instalación desde una fuente externa.",
    trustTitle: "Confianza y verificación",
    trustText: "Aquí se muestran nombre de archivo, versión, tamaño, fecha y SHA-256 para verificar la descarga.",
    hash: "SHA-256",
    copy: "Copiar",
    copied: "Copiado",
    notAvailable: "Aún no disponible",
    installTitle: "Antes de instalar",
    installSteps: ["Descarga el APK solo desde esta página oficial.", "Si Android muestra una advertencia, léela con atención; puede ser normal en APK externos.", "Comprueba nombre, versión y SHA-256.", "Tras instalar, la app abre SineQ dentro de la aplicación."],
    userNoteTitle: "Explicación para el usuario",
    userNote: "Este APK es la versión oficial firmada de SineQ para Android. Android puede mostrar advertencias para APK descargados fuera de Google Play; la advertencia por sí sola no significa que el archivo esté infectado.",
  },
  it: {
    choose: "Scegli lingua",
    chooseDesc: "In quale lingua vuoi usare la pagina di download di SineQ APK?",
    badge: "Android APK",
    desc: "Scarica l'app Android ufficiale di SineQ con dettagli di versione e verifica del file.",
    download: "Scarica APK ufficiale",
    noApk: "APK non ancora caricato",
    version: "Versione",
    size: "Dimensione",
    updated: "Aggiornato",
    admin: "Admin",
    language: "Lingua",
    notes: "Note aggiornamento",
    loading: "Caricamento...",
    official: "APK ufficiale SineQ",
    signed: "Build release firmata",
    warningTitle: "Perché appare un avviso?",
    warningText: "Android o il browser possono mostrare avvisi per APK installati fuori da Google Play. Di solito dipende dal tipo di file e dall'origine esterna.",
    trustTitle: "Fiducia e verifica",
    trustText: "Nome file, versione, dimensione, data e SHA-256 sono mostrati per verificare il download.",
    hash: "SHA-256",
    copy: "Copia",
    copied: "Copiato",
    notAvailable: "Non ancora disponibile",
    installTitle: "Prima dell'installazione",
    installSteps: ["Scarica l'APK solo da questa pagina ufficiale.", "Se Android mostra un avviso, leggilo con attenzione; può essere normale per APK esterni.", "Controlla nome file, versione e SHA-256.", "Dopo l'installazione, l'app apre SineQ dentro l'app."],
    userNoteTitle: "Spiegazione per l'utente",
    userNote: "Questo APK è la versione Android ufficiale e firmata di SineQ. Android può mostrare avvisi per APK scaricati fuori da Google Play; l'avviso da solo non significa che il file sia infetto.",
  },
  fr: {
    choose: "Choisir la langue",
    chooseDesc: "Dans quelle langue veux-tu utiliser la page de téléchargement SineQ APK ?",
    badge: "Android APK",
    desc: "Télécharge l'application Android officielle SineQ avec les détails de version et de vérification.",
    download: "Télécharger l'APK officiel",
    noApk: "Aucun APK téléversé",
    version: "Version",
    size: "Taille",
    updated: "Mis à jour",
    admin: "Admin",
    language: "Langue",
    notes: "Notes de mise à jour",
    loading: "Chargement...",
    official: "APK officiel SineQ",
    signed: "Version release signée",
    warningTitle: "Pourquoi un avertissement apparaît ?",
    warningText: "Android ou le navigateur peuvent afficher un avertissement pour les APK installés hors Google Play. Cela vient souvent du type de fichier et de la source externe.",
    trustTitle: "Confiance et vérification",
    trustText: "Nom du fichier, version, taille, date et SHA-256 sont affichés pour vérifier le téléchargement.",
    hash: "SHA-256",
    copy: "Copier",
    copied: "Copié",
    notAvailable: "Pas encore disponible",
    installTitle: "Avant l'installation",
    installSteps: ["Télécharge l'APK uniquement depuis cette page officielle.", "Si Android affiche un avertissement, lis-le attentivement; cela peut être normal pour un APK externe.", "Vérifie le nom, la version et le SHA-256.", "Après installation, l'application ouvre SineQ dans l'application."],
    userNoteTitle: "Explication utilisateur",
    userNote: "Cet APK est la version Android officielle signée de SineQ. Android peut afficher un avertissement pour les APK téléchargés hors Google Play; l'avertissement seul ne signifie pas que le fichier est infecté.",
  },
  de: {
    choose: "Sprache wählen",
    chooseDesc: "In welcher Sprache möchtest du die SineQ APK-Downloadseite verwenden?",
    badge: "Android APK",
    desc: "Lade die offizielle SineQ Android-App mit Versions- und Prüfinformationen herunter.",
    download: "Offizielle APK herunterladen",
    noApk: "APK wurde noch nicht hochgeladen",
    version: "Version",
    size: "Größe",
    updated: "Aktualisiert",
    admin: "Admin",
    language: "Sprache",
    notes: "Update-Hinweise",
    loading: "Wird geladen...",
    official: "Offizielle SineQ APK",
    signed: "Signierter Release-Build",
    warningTitle: "Warum erscheint eine Warnung?",
    warningText: "Android oder der Browser können bei APKs außerhalb von Google Play warnen. Das liegt meist am Dateityp und der externen Quelle.",
    trustTitle: "Vertrauen und Prüfung",
    trustText: "Dateiname, Version, Größe, Datum und SHA-256 werden angezeigt, damit Nutzer die Datei prüfen können.",
    hash: "SHA-256",
    copy: "Kopieren",
    copied: "Kopiert",
    notAvailable: "Noch nicht verfügbar",
    installTitle: "Vor der Installation",
    installSteps: ["Lade die APK nur von dieser offiziellen Seite herunter.", "Wenn Android eine Warnung zeigt, lies sie sorgfältig; bei externen APKs kann das normal sein.", "Prüfe Dateiname, Version und SHA-256.", "Nach der Installation öffnet die App SineQ innerhalb der App."],
    userNoteTitle: "Erklärung für Nutzer",
    userNote: "Diese APK ist die offizielle signierte Android-Version von SineQ. Android kann bei APKs außerhalb von Google Play warnen; die Warnung allein bedeutet nicht, dass die Datei infiziert ist.",
  },
  "en-GB": {
    choose: "Choose language",
    chooseDesc: "Which language would you like to use for the SineQ APK download page?",
    badge: "Android APK",
    desc: "Download the official SineQ Android app with version and file verification details.",
    download: "Download official APK",
    noApk: "The APK has not been uploaded yet",
    version: "Version",
    size: "Size",
    updated: "Updated",
    admin: "Admin",
    language: "Language",
    notes: "Update notes",
    loading: "Loading...",
    official: "Official SineQ APK",
    signed: "Signed release build",
    warningTitle: "Why does a warning appear?",
    warningText: "Android or the browser may warn about APK files installed outside Google Play. This usually happens because the file type is executable and comes from an unknown source.",
    trustTitle: "Trust and verification",
    trustText: "Filename, version, size, publish date and SHA-256 checksum are shown here so users can verify the file.",
    hash: "SHA-256",
    copy: "Copy",
    copied: "Copied",
    notAvailable: "Not available yet",
    installTitle: "Before installing",
    installSteps: ["Download only from this official page.", "Read Android warnings carefully; they can be normal for sideloaded APKs.", "Check filename, version and SHA-256.", "The app opens SineQ inside the app."],
    userNoteTitle: "User explanation",
    userNote: "This APK is the official signed Android release of SineQ. Android may show a security warning for APKs downloaded outside Google Play; the warning alone does not mean the file is infected.",
  },
  ru: {
    choose: "Выберите язык",
    chooseDesc: "На каком языке использовать страницу загрузки SineQ APK?",
    badge: "Android APK",
    desc: "Скачайте официальное Android-приложение SineQ с данными версии и проверки файла.",
    download: "Скачать официальный APK",
    noApk: "APK ещё не загружен",
    version: "Версия",
    size: "Размер",
    updated: "Обновлено",
    admin: "Админ",
    language: "Язык",
    notes: "Примечания к обновлению",
    loading: "Загрузка...",
    official: "Официальный APK SineQ",
    signed: "Подписанная release-сборка",
    warningTitle: "Почему появляется предупреждение?",
    warningText: "Android или браузер могут предупреждать об APK вне Google Play. Обычно это связано с типом файла и внешним источником.",
    trustTitle: "Доверие и проверка",
    trustText: "Имя файла, версия, размер, дата и SHA-256 показаны для проверки загрузки.",
    hash: "SHA-256",
    copy: "Копировать",
    copied: "Скопировано",
    notAvailable: "Пока недоступно",
    installTitle: "Перед установкой",
    installSteps: ["Скачивайте APK только с этой официальной страницы.", "Если Android показывает предупреждение, внимательно прочитайте его; для внешних APK это может быть нормально.", "Проверьте имя файла, версию и SHA-256.", "После установки приложение открывает SineQ внутри приложения."],
    userNoteTitle: "Пояснение для пользователя",
    userNote: "Этот APK — официальная подписанная Android-версия SineQ. Android может показывать предупреждение для APK вне Google Play; само предупреждение не означает, что файл заражён.",
  },
  zh: {
    choose: "选择语言",
    chooseDesc: "你想用哪种语言使用 SineQ APK 下载页面？",
    badge: "Android APK",
    desc: "下载 SineQ 官方 Android 应用，并查看版本与文件校验信息。",
    download: "下载官方 APK",
    noApk: "尚未上传 APK",
    version: "版本",
    size: "大小",
    updated: "更新时间",
    admin: "管理",
    language: "语言",
    notes: "更新说明",
    loading: "加载中...",
    official: "SineQ 官方 APK",
    signed: "已签名发布版本",
    warningTitle: "为什么会出现警告？",
    warningText: "Android 或浏览器可能会对 Google Play 以外安装的 APK 显示警告。这通常与文件类型和外部来源有关。",
    trustTitle: "信任与验证",
    trustText: "这里显示文件名、版本、大小、发布日期和 SHA-256，方便用户验证下载文件。",
    hash: "SHA-256",
    copy: "复制",
    copied: "已复制",
    notAvailable: "尚不可用",
    installTitle: "安装前说明",
    installSteps: ["只从此官方页面下载 APK。", "如果 Android 显示警告，请仔细阅读；外部 APK 可能会出现此类提示。", "检查文件名、版本和 SHA-256。", "安装后，应用只会在应用内打开 SineQ。"],
    userNoteTitle: "用户说明",
    userNote: "此 APK 是 SineQ 官方签名的 Android 发布版本。Android 可能会对 Google Play 以外下载的 APK 显示安全警告；警告本身并不代表文件感染病毒。",
  }
};

const FALLBACK_TEXT = {
  choose: "Choose language",
  chooseDesc: "Which language do you want to use on the SineQ APK download page?",
  badge: "Android APK",
  desc: "Download the official SineQ Android APK with version and verification details.",
  download: "Download official APK",
  noApk: "APK has not been uploaded yet",
  version: "Version",
  size: "Size",
  updated: "Updated",
  admin: "Admin",
  language: "Language",
  notes: "Update notes",
  loading: "Loading...",
  official: "Official SineQ APK",
  signed: "Signed release build",
  warningTitle: "Why does a warning appear?",
  warningText: "Android or the browser may warn about APK files installed outside Google Play. This does not automatically mean the file is infected.",
  trustTitle: "Trust and verification",
  trustText: "The filename, version, size, publish date and SHA-256 checksum are shown here so users can verify the downloaded file.",
  hash: "SHA-256",
  copy: "Copy",
  copied: "Copied",
  notAvailable: "Not available yet",
  installTitle: "Before installing",
  installSteps: ["Download only from this official page.", "Read Android warnings carefully.", "Check version and SHA-256.", "The app opens SineQ inside the app."],
  userNoteTitle: "User explanation",
  userNote: "This APK is the official signed Android release of SineQ. Android may show a security warning for APK files downloaded outside Google Play; the warning alone does not mean the file is infected.",
};

const REGIONAL_FALLBACK = {};

function getLangText(lang) {
  return { ...FALLBACK_TEXT, ...(T[REGIONAL_FALLBACK[lang] || lang] || {}) };
}

function bytes(n) {
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

function date(v, l) {
  if (!v) return "-";
  try {
    return new Intl.DateTimeFormat(l, { dateStyle: "medium", timeStyle: "short" }).format(new Date(v));
  } catch {
    return v;
  }
}

function shortHash(hash) {
  if (!hash) return "-";
  return `${hash.slice(0, 12)}...${hash.slice(-10)}`;
}

export default function Home() {
  const [lang, setLang] = useState("tr");
  const [ask, setAsk] = useState(false);
  const [apk, setApk] = useState(null);
  const [load, setLoad] = useState(true);
  const [copied, setCopied] = useState(false);
  const t = useMemo(() => getLangText(lang), [lang]);
  const downloadHref = apk?.downloadUrl || apk?.apkUrl || "";
  const hasApk = Boolean(downloadHref);

  useEffect(() => {
    const saved = localStorage.getItem("sineq_lang");
    if (saved && LANGS.some(([code]) => code === saved)) setLang(saved);
    else setAsk(true);

    fetch("/api/latest", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setApk(d?.apkUrl ? d : null))
      .catch(() => setApk(null))
      .finally(() => setLoad(false));
  }, []);

  function choose(code) {
    setLang(code);
    localStorage.setItem("sineq_lang", code);
    setAsk(false);
  }

  async function copyHash() {
    if (!apk?.sha256) return;
    try {
      await navigator.clipboard.writeText(apk.sha256);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="topbar">
        <button className="chip" onClick={() => setAsk(true)}>🌐 {t.language}</button>
        <a className="chip" href="/admin">⚙️ {t.admin}</a>
      </div>

      <section className="card">
        <div className="hero">
          <div className="logo-wrap">
            <img className="logo" src="/sineq.png" alt="SineQ" />
          </div>

          <div>
            <div className="kicker">⬇️ {t.badge}</div>
            <h1>Sine<span>Q</span><small> APK</small></h1>
            <p className="desc">{t.desc}</p>

            <div className="safety-banner">
              <span>🛡️</span>
              <div>
                <strong>{t.official}</strong>
                <p>{t.signed}</p>
              </div>
            </div>

            <div className="meta-grid">
              <div className="meta"><small>{t.version}</small><strong>{load ? t.loading : (apk?.version || "-")}</strong></div>
              <div className="meta"><small>{t.size}</small><strong>{load ? t.loading : bytes(apk?.size)}</strong></div>
              <div className="meta"><small>{t.updated}</small><strong>{load ? t.loading : date(apk?.publishedAt, lang)}</strong></div>
              <div className="meta"><small>{t.hash}</small><strong title={apk?.sha256 || ""}>{load ? t.loading : shortHash(apk?.sha256)}</strong></div>
            </div>

            <div className="actions">
              {hasApk ? (
                <a className="btn btn-primary" href={downloadHref} download>⬇️ {t.download}</a>
              ) : (
                <button className="btn btn-primary" disabled>{load ? t.loading : t.noApk}</button>
              )}
              <button className="btn btn-soft" onClick={() => setAsk(true)}>🌐 {t.language}</button>
            </div>

            {apk?.notes ? <div className="notes"><strong>{t.notes}</strong><br />{apk.notes}</div> : null}
          </div>
        </div>
      </section>

      <section className="info-grid">
        <article className="info-card good">
          <div className="info-icon">✅</div>
          <h2>{t.trustTitle}</h2>
          <p>{t.trustText}</p>
        </article>
        <article className="info-card warn">
          <div className="info-icon">⚠️</div>
          <h2>{t.warningTitle}</h2>
          <p>{t.warningText}</p>
        </article>
      </section>

      <section className="steps-card">
        <div className="steps-head">
          <div>
            <div className="kicker mini">🔐 APK güven bilgisi</div>
            <h2>{t.installTitle}</h2>
          </div>
          {apk?.sha256 ? <button className="btn btn-soft" onClick={copyHash}>{copied ? t.copied : t.copy}</button> : null}
        </div>

        <ol className="steps-list">
          {t.installSteps.map((step, index) => <li key={index}>{step}</li>)}
        </ol>

        <div className="hash-box">
          <small>{t.hash}</small>
          <code>{apk?.sha256 || t.notAvailable}</code>
        </div>

        {apk?.originalName ? <div className="file-name">📦 {apk.originalName}</div> : null}

        <div className="user-note">
          <strong>{t.userNoteTitle}</strong>
          <p>{t.userNote}</p>
        </div>
      </section>

      {ask && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>{t.choose}</h2>
            <p className="desc">{t.chooseDesc}</p>
            <div className="lang-grid">
              {LANGS.map(([code, label]) => <button className="lang-btn" key={code} onClick={() => choose(code)}>{label}</button>)}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
