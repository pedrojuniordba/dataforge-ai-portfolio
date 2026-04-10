import "./globals.css"
import { LanguageProvider } from "../context/LanguageContext"

export const metadata = {
  title: "DataForge AI",
  description: "Data Engineering & AI Automation",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}