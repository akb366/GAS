import { actorSearch } from "../api/dbSearch";
import Actor from "../components/Actor";

export default async function Home({searchParams}) {

    var search = searchParams.a

    if (search == null) {
        search = " "
    }

    try {
        const result = await actorSearch(search)
        if(result) {
            return (
                <Actor actor={result} />
    
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