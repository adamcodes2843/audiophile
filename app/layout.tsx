import './globals.css'
import { Manrope } from 'next/font/google'
import Footer from './Components/Footer'


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
      <body className={`${manrope.className}, text-body flex flex-col jusify-between m-0 p-0 min-h-screen bg-audiocolor-b2`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
