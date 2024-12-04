import localFont from "next/font/local";
import "./globals.css";

import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const modernGothic = localFont({
  src: [
    {
      path: "../fonts/ModernGothic/ModernGothic-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ModernGothic/ModernGothic-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-modern-gothic",
});

export const modernGothicMono = localFont({
  src: [
    {
      path: "../fonts/ModernGothic/ModernGothicMono-Medium.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-modern-gothic-mono",
});

export const metadata = {
  title: "Wimbee",
  description: "Wimbee is a digital AI agency",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={`${modernGothic.variable} ${modernGothicMono.variable} bg-light-200 font-main antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
