import "./globals.css"
import { LanguageProvider } from "../context/LanguageContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="bg-black text-white antialiased">
        <LanguageProvider>
          <div className="max-w-6xl mx-auto px-6">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  )
}