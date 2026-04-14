import "./globals.css"
import { LanguageProvider } from "../context/LanguageContext"
import Script from "next/script"

export const metadata = {
  title: "DataForge AI",
  description: "Data Engineering & AI Automation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="bg-black text-white">

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXX`}
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', 'G-XXXX');
          `}
        </Script>

        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}