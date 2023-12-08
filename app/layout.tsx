import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { GeistSans } from "geist/font/sans";
import './globals.scss'
import { siteDescription, siteTitle } from '@/data/site'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
}

const clashDisplayFont = localFont({ src: '../public/assets/fonts/clash-display-bold.woff2', variable: '--font-accent' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${clashDisplayFont.variable} ${GeistSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
