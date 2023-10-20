import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Movie({movie}) {

    const poster = movie.poster ? movie.poster : '/imageNotFound.jpeg'
    const gross = movie.earnings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const star = `/actor?a=${movie.star}`
    const coStar = `/actor?a=${movie.coStar}`
    return (
        <>
        <div className="columns-2 gap-32 flex justify-center">
                <Image
                src={poster}
                width={300}
                height={400}
                alt="No Image"
                className=""
                />
                <div className="">
                    <h1 className="text-5xl font-bold">{movie.name}</h1>
                    <h3 className="text-xl">{movie.relYear}  •  {movie.rating}</h3>
                    <h3>Director <Link className="text-emerald-400 inline px-2" href="">{movie.director}</Link></h3>
                    <h3>Stars <Link className="text-emerald-400 inline px-2" href={star}>{movie.star}</Link><Link className="text-emerald-400 inline px-2" href={coStar}>{movie.coStar}</Link></h3>
                    <h3 className="pt-3">Summary:</h3>
                    <p className="max-w-md max-h-md overflow-auto">{movie.plot}</p>
                </div>
        </div>
        <div className="py-14 columns-2">
            <h3>Earnings</h3>
            <h3>${gross}</h3>
        </div>
        </>
    )
}