import { actorSearch } from "../api/dbSearch";
import Poster from "../components/Poster";

export default async function actorPage({searchParams}) {

    var search = searchParams.a

    if (search == null) {
        search = " "
    }

    try {
        const result = await actorSearch(search)
        if(result) {
            return (
                <>
                    <h1 className="text-2xl text-emerald-400 pb-10">{result[0].actor}</h1>
                    <Poster movies={result} />
                </>
    
            )
        } else {
            return (
                <h3>No Movie Found</h3>
            )
        }
    } catch(err) {
        console.log(err)
    }
}