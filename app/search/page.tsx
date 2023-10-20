import Movie from "../components/Movie";
import { actorSearch, nameSearch } from "../api/dbSearch";

export default async function SearchPage({searchParams}) {
    
    var searchQuery = searchParams.q

    if (searchQuery == null) {
        searchQuery = " "
    }

    try {
        const result = await nameSearch(searchQuery)
        if(result) {
            return (
                <Movie movie={result} />
    
            )
        } else {
            return (
                <h3>No Movie Found</h3>
            )
        }
    } catch(err) {
        console.log(err)
    }

};
