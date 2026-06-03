# SineQ APK Download Site

SineQ APK için resmi indirme sitesi + admin paneli.

## Bu SineQ düzenlemesinde yapılanlar

- Eski QasimFlix marka adı tüm görünen alanlarda **SineQ** olarak değiştirildi.
- Netflix kırmızısı yerine koyu lacivert + altın premium tema eklendi.
- Yeni **SineQ** logo görseli oluşturuldu: `public/sineq.png`.
- Admin paneli APK dosya adlarını artık `SineQ-v...-release-signed.apk` formatında oluşturur.
- Vercel Blob yolları `sineq/apk/` ve `sineq/latest.json` olarak düzenlendi.
- Dil seçimi localStorage anahtarı `sineq_lang` yapıldı.
- Zip içindeki gereksiz nested `.git` ve kopya proje klasörü temizlendi.

## Kullanıcıya gösterilecek kısa açıklama

```text
Bu APK, SineQ'nun resmi imzalı Android sürümüdür. Android, Play Store dışından indirilen APK dosyalarında güvenlik uyarısı gösterebilir; bu uyarı tek başına dosyanın virüslü olduğu anlamına gelmez.
```

## Özellikler

- Ana sayfada SineQ logosu
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

## Git kurulumu

Bu zip içinde `.git` klasörü yoktur. GitHub'a göndermek için `GIT_CLONE_KURULUM.md` dosyasındaki adımları kullanın.
