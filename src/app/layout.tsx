import "./globals.css"
import Menu from "@/components/Menu"
import type { Metadata } from "next"
import { font_body } from "./fonts"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por origamid!",
  openGraph: {
    title: "Origamid Next 'Open Graph Title'",
    description: "Criado por origamid! 'Open Graph Description'",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font_body.className} ${font_body.variable}`}>
        <Menu />
        <div>{children}</div>

        {/* Google Tag Manager */}
        <Script
          id="google-tag-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX"
        ></Script>
        <Script id="google-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
}
