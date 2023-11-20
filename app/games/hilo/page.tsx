import React from "react";
import Image from "next/image";
import Link from "next/link";
import { movieIDSearch, random } from "@/app/api/dbSearch";

export default async function gamePage({searchParams}: {searchParams: {p: number | undefined; c: number | undefined;}}) {

    var result1;
    var result2;

    if (searchParams.p === undefined) {
        result1 = await random()
        result2 = await random(result1.movie_id)
    } else {
        result1 = await movieIDSearch(searchParams.p)
        result2 = await random(searchParams.p, searchParams.c)
    }

    return (
        <>
            <div className="mt-20 flex-col-1 items-center justify-center">
                <h1 className="flex justify-center">Which Earned More?</h1> <br></br>
                <div className="flex flex-col-2 gap-40 justify-evenly">
                    <Link href={`hilo/result?l=${result1.movie_id}&r=${result2.movie_id}&c=1`}>
                        <Image
                            src={result1.poster}
                            width={300}
                            height={400}
                            alt="movie poster"
                        />
                    </Link>

                    <Link href={`hilo/result?l=${result1.movie_id}&r=${result2.movie_id}&c=2`}>
                        <Image
                            src={result2.poster}
                            width={300}
                            height={400}
                            alt="movie poster"
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}