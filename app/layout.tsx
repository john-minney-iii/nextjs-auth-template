import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Context
import NextAuthProvider from '@/context/NextAuthProvider'

// NextAuth
import { getServerSession } from 'next-auth/next';
import authOptions from '@/src/util/next-auth-options';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
