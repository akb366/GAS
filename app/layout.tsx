import SearchMovies from './components/SearchMovies'
import './globals.css'
import type { Metadata } from 'next'

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
        <div className='flex flex-col gap-10 items-center p-6'>
          <SearchMovies />
          <div className='flex flex-col items-center w-full'>{children}</div>
        </div>
      </body>
    </html>
  )
}
