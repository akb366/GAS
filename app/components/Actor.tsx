import React from "react";
import Image from "next/image";


export default function Actor({actor}) {
    return(
        <>
            <ul>
                {actor.map(role =>(
                    <li key={role.movie}>
                        <h3>{role.movie}</h3>
                        <p>{role.name}</p>
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