import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { PWAInstaller } from '@/components/pwa-installer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://Dhruva.dev'),
  title: 'Dhruva - Full Stack Developer',
  description: 'Modern developer portfolio showcasing innovative projects and cutting-edge technologies.',
  keywords: ['developer', 'portfolio', 'full stack', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Dhruva' }],
  creator: 'Dhruva',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Dhruva.dev',
    title: 'Dhruva - Full Stack Developer',
    description: 'Modern developer portfolio showcasing innovative projects and cutting-edge technologies.',
    siteName: 'Dhruva Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Dhruva - Full Stack Developer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruva - Full Stack Developer',
    description: 'Modern developer portfolio showcasing innovative projects and cutting-edge technologies.',
    creator: '@Dhruva',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PWAInstaller />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
