import React from "react";
import Image from "next/image";


export default async function Movies({movie}) {
    
    return (
        <>
                <Image 
                src={movie.poster} 
                alt={movie.name} 
                width={100} 
                height={100} 
                />

                <h3>{movie.name}</h3>
                <p>{movie.plot}</p>
        </>
    )
}