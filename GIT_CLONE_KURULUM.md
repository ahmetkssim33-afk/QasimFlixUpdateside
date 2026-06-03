# SineQ Git Clone Kurulum

Bu zip içinde `.git` klasörü özellikle yoktur. Bu yüzden direkt bu klasörde `git status` yazarsan şu hatayı görebilirsin:

```bash
fatal: not a git repository (or any of the parent directories): .git
```

En temiz yöntem GitHub reposunu tekrar klonlayıp bu SineQ dosyalarını onun içine kopyalamaktır.

## 1) GitHub reposunu indir

Aşağıdaki linki kendi GitHub repo linkinle değiştir:

```bash
git clone https://github.com/KULLANICI_ADI/REPO_ADI.git SineQDownload
```

Örnek:

```bash
git clone https://github.com/ahmetkssim33-afk/QasimFlixv2.git SineQDownload
```

## 2) Bu zipteki dosyaları klonlanan klasöre kopyala

Zip içindeki dosyaları aç ve klonladığın `SineQDownload` klasörünün içine kopyala. Windows sorarsa:

```text
Hedefteki dosyaları değiştir
```

seç.

## 3) Değişiklikleri kontrol et

Klonlanan klasörün içinde CMD aç:

```bash
git status
```

## 4) GitHub'a gönder

```bash
git add .
git commit -m "SineQ APK indirme sitesini guncelle"
git push
```

## Alternatif: repo yoksa yeni git başlat

Eğer GitHub'da repo yoksa veya bu klasörü yeni repo yapmak istiyorsan:

```bash
git init
git add .
git commit -m "SineQ ilk surum"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
git push -u origin main
```

## Not

`.git` klasörünü zip içine eklemek iyi değildir. En doğru yol her zaman `git clone` ile repo indirmek veya `git init` ile yeni repo başlatmaktır.
