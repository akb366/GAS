import { ReadonlyURLSearchParams } from "next/navigation";
import Movie from "../components/Movie";
import { nameSearch } from "../api/dbSearch";

export async function fetchMovie(name: string) {
    console.log(name)
    const result = await nameSearch(name)

    return result
}

export default async function SearchPage(searchParams: ReadonlyURLSearchParams) {
    
    var searchQuery = searchParams ? searchParams.q : null

    if (searchQuery == null) {
        searchQuery = " "
    }

    const result = await nameSearch(searchQuery)

    return (
        <Movie movie = {result} />
    )
};