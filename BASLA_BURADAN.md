# SineQ - Baştan Kurulum ve Git Push

Bu zip **tek parça hazırlanmıştır**. İçinde `.git` klasörü de vardır. Bu yüzden doğru klasöre girersen `git status`, `git add`, `git commit`, `git push` çalışır.

## 1) Zipi çıkar

Zipi masaüstüne çıkar. İçinde şu klasör olacak:

```text
SineQDownload
```

## 2) CMD ile doğru klasöre gir

```cmd
cd C:\Users\termu\Desktop\SineQDownload
```

Eğer klasörü başka yere çıkardıysan, ona göre yolu değiştir.

## 3) Git kontrol et

```cmd
git status
```

Burada değişen dosyaları görmen lazım.

## 4) GitHub'a gönder

```cmd
git add .
git commit -m "SineQ APK indirme sitesini guncelle"
git push
```

## Eğer yine `not a git repository` derse

Yanlış klasördesin demektir. İçinde şu dosyalar görünmeli:

```text
app
public
package.json
README.md
.git
```

CMD'de şu komutu dene:

```cmd
dir /a
```

`.git` görünüyorsa doğru yerdesin.

## Repo adresini kontrol etmek için

```cmd
git remote -v
```

Bu paket orijinal zipteki Git ayarına göre şu repoya bağlıdır:

```text
https://github.com/ahmetkssim33-afk/QasimFlixUpdateside.git
```

Eğer başka repoya göndermek istersen:

```cmd
git remote set-url origin https://github.com/ahmetkssim33-afk/QasimFlixv2.git
```

Sonra tekrar:

```cmd
git push
```

## Deploy sonrası

Vercel yayına aldıktan sonra `/admin` paneline girip APK dosyanı tekrar yükle. Çünkü SineQ düzenlemesinde APK yolu artık `sineq/apk/` ve metadata yolu `sineq/latest.json` oldu.
