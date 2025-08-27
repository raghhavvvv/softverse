import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '../components/CustomCursor'
import ScrollAnimations from '../components/ScrollAnimations'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Softverse Systems - Crafting Visionary Digital Solutions',
  description: 'We create innovative digital solutions for a connected future. Specializing in software development, cloud infrastructure, and digital transformation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CustomCursor />
        <ScrollAnimations />
      </body>
    </html>
  )
}
