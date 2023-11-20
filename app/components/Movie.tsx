import React from "react";
import Image from "next/image";
import Link from "next/link";
import { movie } from "./Interface";

export default function Movie(props: {movie: movie}) {
    const poster = props.movie.poster ? props.movie.poster : '/imageNotFound.jpeg'
    //const gross = props.movie.earnings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
        <>
        <div className="columns-2 gap-32 flex justify-center">
                <Image
                src={poster}
                width={300}
                height={400}
                alt="No Image"
                />
                <div className="max-h-100">
                    <h1 className="text-5xl font-bold">{props.movie.name}</h1>
                    <h3 className="text-xl">{props.movie.relYear}  •  {props.movie.rating}</h3>
                    <h3>Director <Link className="text-emerald-400 inline px-2" href={`/director?d=${props.movie.directorID}`}>{props.movie.director}</Link></h3>
                    <h3>Stars <Link className="text-emerald-400 inline px-2" href={`/actor?a=${props.movie.starID}`}>{props.movie.star}</Link><Link className="text-emerald-400 inline px-2" href={`/actor?a=${props.movie.coStarID}`}>{props.movie.coStar}</Link></h3>
                    <h3 className="pt-8">Summary:</h3>
                    <p className="max-w-md max-h-64 overflow-auto">{props.movie.plot}</p>
                </div>
                <div>
                    <Link href={`movie/cast?q=${props.movie.movie_id}`}>Full Cast List</Link>
                </div>
        </div>
        </>
    )
}