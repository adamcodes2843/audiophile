import './globals.css'
import { Manrope } from 'next/font/google'
import Nav from './Nav'


const manrope = Manrope({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-manrope'
})

export const metadata = {
  title: 'audiophile',
  description: 'Full stack Next 13 e-commerce website.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className}, text-body flex flex-col`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
