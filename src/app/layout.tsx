import "./globals.css"
import Menu from "@/components/Menu"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por origamid!",
  openGraph: {
    title: "Origamid Next 'Open Graph Title'",
    description: "Criado por origamid! 'Open Graph Description'",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        <div>{children}</div>
      </body>
    </html>
  )
}
