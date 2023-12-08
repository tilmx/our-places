import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.scss'
import { siteDescription, siteTitle } from '@/data/site'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
}

const clashDisplayFont = localFont({ src: '../public/assets/fonts/clash-display-bold.woff2' })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clashDisplayFont.className}>
        {children}
      </body>
    </html>
  )
}
