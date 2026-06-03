@echo off
cd /d "%~dp0"
echo Su anki klasor:
cd
echo.
echo Git durumu kontrol ediliyor...
git status
echo.
echo Devam etmek icin bir tusa bas. Kapatmak istersen pencereyi kapat.
pause
git add .
git commit -m "SineQ APK indirme sitesini guncelle"
git push
echo.
pause
