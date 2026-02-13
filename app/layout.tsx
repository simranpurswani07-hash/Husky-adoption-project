import type { Metadata } from 'next'
import { DM_Sans, Archivo_Black } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

const archivoBlack = Archivo_Black({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-archivo-black',
})

export const metadata: Metadata = {
  title: 'Husky Adoption Dubai - Relocate Arctic Dogs to Cold Climates | Stray Dogs Centre',
  description: 'Adopt beautiful huskies from Dubai\'s heat. Chipped, documented, ready for relocation to Europe & UK. Husky adoption, husky price & relocation details from Stray Dogs Centre.',
  keywords: 'husky for adoption, husky price, husky dog price, husky adoption dubai, husky relocation, adopt husky UAE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${archivoBlack.variable}`}>
        {children}
      </body>
    </html>
  )
}
