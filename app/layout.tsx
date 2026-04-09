import "./globals.css"
import { LanguageProvider } from "../context/LanguageContext"

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}