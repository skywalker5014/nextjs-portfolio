import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <script async src=`"https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}"`></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', `${process.env.GOOGLE_ANALYTICS_ID}`);
</script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
