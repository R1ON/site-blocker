import type { Metadata } from 'next'
import { AppProviders } from '@/app/providers';

export const metadata: Metadata = {
  title: 'Site blocker',
  description: 'Special site for block other sites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <AppProviders>
        {children}
      </AppProviders>
      </body>
    </html>
  )
}
