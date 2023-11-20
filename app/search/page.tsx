import { searchResults } from "../api/dbSearch";
import Poster from "../components/Poster";

export default async function SearchPage({searchParams}) {
    
    var searchQuery = searchParams.q

    if (searchQuery == null) {
        searchQuery = " "
    }

    try {
        const result = await searchResults(searchQuery)
        if(result) {
            return (
                <Poster movies={result} />
    
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
