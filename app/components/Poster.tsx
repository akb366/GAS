import React from "react";
import Image from "next/image";
import Link from "next/link";
import { moviePoster } from "./Interface";

type movieList = {
    movies: moviePoster[]
}

export default function Poster({movies}: movieList) {
    return(
        <>
            <ul className="grid grid-cols-3 gap-4 items-start">
                {movies.map(movie =>(
                    <li key={movie.movie_id}>
                        <Link href={`/movie?q=${movie.movie_id}`}>
                            <Image
                                src={movie.poster}
                                width={300}
                                height={400}
                                alt={movie.name}
                            />
                        </Link>
                    </li>
                ))}
            </ul>   
        </>
    )

}