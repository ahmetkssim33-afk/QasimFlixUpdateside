# QasimFlix APK Download Site

QasimFlix APK için hızlı indirme sitesi + küçük admin paneli.

## Özellikler

- Ana sayfada QasimFlix logosu
- İlk girişte dil seçimi
- Diller: Türkçe, İngilizce, Arapça, İspanyolca, İtalyanca, Fransızca, Almanca, English UK, Rusça, Çince
- Admin paneli: `/admin`
- Bilgisayardan `.apk` seçip yükleme
- Sürüm, boyut, güncelleme notu gösterme
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

## Not

Vercel üzerinde dosyayı proje klasörüne kaydetmek kalıcı değildir. Bu yüzden APK dosyaları Vercel Blob'a yüklenir.
