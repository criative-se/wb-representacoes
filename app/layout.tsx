import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WB Representações | Wilson Bittencourt',
  description: 'Empresa especializada na comercialização de máquinas para construção civil na região sul de Santa Catarina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
