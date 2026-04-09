import "./globals.css"
import { LanguageProvider } from "../context/LanguageContext"

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}