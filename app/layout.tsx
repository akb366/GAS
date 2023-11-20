import React from 'react'
import SearchMovies from './components/SearchMovies'
import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GAS Station Movie Rental',
  description: 'Movie Database',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-200'>
        <div className='flex flex-col-2 gap-10 items-center p-6'>
          <div>
            <Link href={"/"}>
              <Image 
                src='/icon.png' 
                width={50} 
                height={50}
                alt="logo"
              />
            </Link>
            <Link href={"/games"}>games</Link>
          </div>
          <div className='flex flex-col items-center w-full'>
            <SearchMovies />
          </div>
        </div>
        <div className='flex flex-col items-center w-full'>{children}</div>
      </body>
    </html>
  )
}
