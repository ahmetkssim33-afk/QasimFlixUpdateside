import "./globals.css";

export const metadata = {
  title: "SineQ APK - Resmi İndirme",
  description: "SineQ Android APK resmi indirme sayfası. Sürüm, dosya boyutu ve SHA-256 doğrulama bilgisiyle güvenli indirme.",
  icons: { icon: "/sineq.png", apple: "/sineq.png" },
  openGraph: {
    title: "SineQ APK - Resmi İndirme",
    description: "SineQ Android APK resmi indirme sayfası.",
    images: ["/sineq.png"],
  },
};

export default function RootLayout({ children }) {
  return <html lang="tr"><body>{children}</body></html>;
}
