import React from "react";
import Link from "next/link";

export default async function gamePage() {


    return (
        <>
            <div className="flex flex-col-2 gap-40 justify-evenly">
                <Link href={`/games/hilo`}>
                    <h1>HiLo Earnings Game</h1>
                </Link>

                <Link href={`/games/ladder`}>
                    <h1>Ladder Game</h1>
                </Link>
            </div>
        </>
    )
}