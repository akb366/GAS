import React from "react";
import Image from "next/image";
import Link from "next/link";
import { actorSearch, castList, movieIDSearch, random } from "@/app/api/dbSearch";
import { getStart, getEnd, setStart, setEnd } from "@/app/components/ladderVariables";

export async function resetLadder() {

}

export default async function gamePage({searchParams}: {searchParams: {m: number | undefined; a: number | undefined;}}) {

    const start_id = await getStart();
    const end_id = await getEnd();

    var start;
    var end;

    if (start_id == 0 || end_id == 0 || (searchParams.m === undefined && searchParams.a === undefined)) {
        start = await random();
        end = await random(start.movie_id);
        setStart(start.movie_id);
        setEnd(end.movie_id );
    } else {
        start = await movieIDSearch(await getStart())
        end = await movieIDSearch(await getEnd())
    }

    if (searchParams.m == end.movie_id) {
        return (
            <>
                YOU WIN
                <div>
                    <Link href={"http://localhost:3000/games/ladder"}>Restart</Link>
                </div>
            </>
        )
    }

    var list;
    var key: string;
    var type: string;


    if (searchParams.m != undefined) {
        list =  await castList(searchParams.m);
        key = "actor_id";
        type = "a";
    } else if (searchParams.a != undefined) {
        list = await actorSearch(searchParams.a);
        key = "movie_id";
        type = "m";
    } else {
        list =  await castList(start.movie_id);
        key = "actor_id";
        type = "a";
    }

    return (
        <>
            <div>
                <Link href={"http://localhost:3000/games/ladder"}>RESET</Link>
            </div>
            <div className="flex flex-col-2 gap-40 justify-evenly">
                <Image
                    src={start.poster}
                    width={300}
                    height={400}
                    alt="movie poster"
                />
                <Image
                    src={end.poster}
                    width={300}
                    height={400}
                    alt="movie poster"
                />
            </div>

            <div className="grid grid-cols-4 gap-x-12 mt-8">
                {list.map(item =>(
                        <li key={list.actor_id}>
                            <Link href={`ladder?${type}=${item[key]}`}>{item.name}</Link>
                        </li>
                ))}
            </div>
        </>
    )
}