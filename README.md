# QasimFlix APK Download Site

QasimFlix APK için resmi indirme sitesi + admin paneli.

## Bu güncellemede eklenenler

- Ana sayfaya **APK güven açıklaması** eklendi.
- Kullanıcının gördüğü “virüslü olabilir / zararlı olabilir” uyarısının neden çıkabileceği açıklandı.
- Admin panelinde APK seçilince **SHA-256 otomatik hesaplanır**.
- Ana sayfada dosya adı, sürüm, boyut, yayın tarihi ve SHA-256 gösterilir.
- Kullanıcı SHA-256 kodunu tek tıkla kopyalayabilir.
- APK dosya adı daha profesyonel formata çevrildi: `QasimFlix-v1.0.6-release-signed.apk`.
- Zip içindeki gereksiz nested `.git` ve kopya proje temizlendi.

## Kullanıcıya gösterilecek kısa açıklama

```text
Bu APK, QasimFlix'in resmi imzalı Android sürümüdür. Android, Play Store dışından indirilen APK dosyalarında güvenlik uyarısı gösterebilir; bu uyarı tek başına dosyanın virüslü olduğu anlamına gelmez.
```

## Özellikler

- Ana sayfada QasimFlix logosu
- İlk girişte dil seçimi
- Diller: Türkçe, İngilizce, Arapça, İspanyolca, İtalyanca, Fransızca, Almanca, English UK, Rusça, Çince
- Admin paneli: `/admin`
- Bilgisayardan `.apk` seçip yükleme
- Sürüm, boyut, güncelleme notu gösterme
- SHA-256 doğrulama kodu gösterme
- Vercel Blob ile büyük APK dosyası yükleme
- Son yüklenen APK otomatik ana sayfada görünür

## Local kurulum

```bash
npm install
npm run dev
```

## Vercel ayarları

1. Projeyi GitHub'a gönder.
2. Vercel'e bağla.
3. Vercel Dashboard > Storage > Create Database > Blob oluştur.
4. Blob store oluşturunca `BLOB_READ_WRITE_TOKEN` otomatik eklenir.
5. Vercel Project > Settings > Environment Variables içine şunu ekle:

```text
ADMIN_PASSWORD=buraya_guclu_sifre
```

6. Deploy et.
7. Admin paneline git:

```text
https://siteadresin.vercel.app/admin
```

8. APK dosyanı bilgisayardan seçip yükle.
9. Ana sayfada SHA-256 bilgisinin göründüğünü kontrol et.

## Not

Google Drive, Chrome veya Android bazı APK dosyalarında güvenlik uyarısı gösterebilir. Bu site uyarıyı tamamen kaldıramaz; ama kullanıcıya resmi kaynak, sürüm bilgisi ve SHA-256 doğrulama bilgisi vererek yanlış anlaşılmayı azaltır.
