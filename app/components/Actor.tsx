import React from "react";
import Image from "next/image";


export default function Actor({actor}) {
    return(
        <>
            <h1 className="text-2xl text-emerald-400 pb-10">{actor[0].actor}</h1>
            <ul className="grid grid-cols-3 gap-4 items-start">
                {actor.map(role =>(
                    <li key={role.movie}>
                        <Image
                            src={role.poster}
                            width={300}
                            height={400}
                            alt={role.movie}
                        />
                    </li>
                ))}
            </ul>   
        </>
    )

}