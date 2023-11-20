import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { movieIDSearch } from "@/app/api/dbSearch";
import { raiseScore, resetScore } from "@/app/components/ladderVariables";

export default async function gamePage({searchParams}: {searchParams: { l: number | undefined; r: number | undefined; c: number | undefined;};}) {

    if (searchParams.l != undefined && searchParams.c != undefined && searchParams.r != undefined) {
        var correct;
        var score
        var link;
        const result1 = await movieIDSearch(searchParams.l)

        const previous = await movieIDSearch(searchParams.r)

        if (result1.earnings > previous.earnings) {
            if (searchParams.c == 1){
                correct = "Correct!";
                score = await raiseScore();
            } else {
                correct = "WRONG";
                await resetScore();
                score = 0;
            }
        } else {
            if (searchParams.c == 2){
                correct = "Correct!";
                score =await raiseScore();
            } else {
                correct = "WRONG";
                await resetScore();
                score = 0;
            }
        }

        if (searchParams.c == 1) {
            link = `./?p=${result1.movie_id}&c=${previous.movie_id}`;
        } else {
            link = `./?p=${previous.movie_id}&c=${result1.movie_id}`;
        }

        const gross1 = result1.earnings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const gross2 = previous.earnings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        return (
            <>
                <div className="mt-20 flex-col-1 items-center justify-center">

                    <h1 className="flex justify-center">{correct}</h1>
                    <h1 className="flex justify-center">{score}</h1>

                    <div className="flex flex-col-2 gap-40">
                        <div>
                            <Image
                                src={result1.poster}
                                width={300}
                                height={400}
                                alt="movie poster"
                            />
                            <h1 className="text-emerald-400 text-2xl align-middle">${gross1}</h1>
                        </div>

                        <div>
                            <Image
                                src={previous.poster}
                                width={300}
                                height={400}
                                alt="movie poster"
                            />
                            <h1 className="text-emerald-400 text-2xl align-middle">${gross2}</h1>
                        </div>
                    </div>

                    <Link href={link} className="mt-8 flex justify-center">
                        <h1 className="text-red-400 text-xl">Next</h1>
                    </Link>
                </div>
            </>
        )
    }
}