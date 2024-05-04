import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import AuthProvider from './provider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Khana Khazana - Home',
  description:
    'Khana Khazana - substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes',
  openGraph: {
    images: [
      {
        url: 'https://m-khana-khazana.vercel.app/api/og',
        width: 1200,
        height: 600,
      },
    ],
  },
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <div id="modal-root-content" />
        </AuthProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: { backgroundColor: 'green' },
            className: 'sonner-text',
          }}
        />
      </body>
    </html>
  )
}
