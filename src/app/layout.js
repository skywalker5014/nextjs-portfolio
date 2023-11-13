import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CZLN4NFHGP"></Script>
<Script>
    {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CZLN4NFHGP');
`}
</Script>
  </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
