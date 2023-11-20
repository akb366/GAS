import { castList } from "@/app/api/dbSearch";
import Link from "next/link";


export default async function cast({searchParams}: {searchParams: { q: string | undefined;};}) {

    const list = await castList(Number(searchParams.q))

    return(
        <>
            <Link href={`/movie?q=${searchParams.q}`}>Back to Movie</Link>
            {list.map(actor =>(
                    <li key={actor.actor_id}>
                        <Link href={`/actor?q=${actor.actor_id}`}>{actor.name}</Link>
                    </li>
            ))}
        </>
    )
}