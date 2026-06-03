# SineQ düzenleme notları

Bu pakette ana proje SineQ kimliğine göre düzenlendi.

## Değişen ana alanlar

- `app/page.jsx`: Ana sayfa metinleri, tüm dil metinleri, logo yolu ve başlık SineQ yapıldı.
- `app/globals.css`: Kırmızı/Netflix hissi kaldırıldı; koyu lacivert + altın tema eklendi.
- `app/layout.jsx`: Sayfa başlığı, açıklama, icon ve OpenGraph görseli SineQ yapıldı.
- `app/admin/page.jsx`: Admin yükleme yolu ve APK dosya adı `SineQ-v...` formatına çevrildi.
- `app/api/latest/route.js`: Son APK metadatası `sineq/latest.json` üzerinden okunur.
- `app/api/admin/metadata/route.js`: Metadata `appName: SineQ` ve `sineq/latest.json` olarak kaydedilir.
- `app/api/upload/route.js`: Sadece `sineq/apk/` yoluna APK yüklemeye izin verir.
- `public/sineq.png`: Yeni SineQ logo görseli eklendi.
- Gereksiz nested kopya proje ve `.git` klasörü temizlendi.

## Deploy sonrası önemli not

Eski QasimFlix Blob yolundaki APK bilgisi artık kullanılmaz. SineQ adıyla yayınlamak için `/admin` panelinden APK'yı bir kez tekrar yüklemen gerekir.
