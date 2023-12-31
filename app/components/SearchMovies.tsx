'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function SearchMovies() {

    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault()

        router.push(`/search?q=${searchQuery}`)
    }

    return (
        <form onSubmit={onSearch} className='flex justify-center w-2/3'>
            <input 
                value={searchQuery} 
                onChange={event => setSearchQuery(event.target.value)} 
                placeholder='Search Movies'
                className='px-5 py-1 w-2/3 sm:px-5 sm:px-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none'
            />
        </form>
    )
}