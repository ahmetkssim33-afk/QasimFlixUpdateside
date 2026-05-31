import "./globals.css";

export const metadata = {
  title: "QasimFlix APK - Resmi İndirme",
  description: "QasimFlix Android APK resmi indirme sayfası. Sürüm, dosya boyutu ve SHA-256 doğrulama bilgisiyle güvenli indirme.",
  icons: { icon: "/qasimflix.png", apple: "/qasimflix.png" },
  openGraph: {
    title: "QasimFlix APK - Resmi İndirme",
    description: "QasimFlix Android APK resmi indirme sayfası.",
    images: ["/qasimflix.png"],
  },
};

export default function RootLayout({ children }) {
  return <html lang="tr"><body>{children}</body></html>;
}
