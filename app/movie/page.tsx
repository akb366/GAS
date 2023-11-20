import Movie from "../components/Movie";
import { directorSearch, movieIDSearch, starSearch } from "../api/dbSearch";
import { movie } from "../components/Interface";

export default async function SearchPage({searchParams}: {searchParams: { q: string | undefined;};}) {
    
    var searchQuery = searchParams.q

    if (searchQuery == null) {
        searchQuery = " "
    }

    try {
        var movie: movie = await movieIDSearch(Number(searchQuery))

        var result = await starSearch(movie.movie_id, 1);
        if (result != undefined) {
            movie.star = result.name;
            movie.starID = result.actor_id;
        }

        result = await starSearch(movie.movie_id, 2);
        if (result != undefined) {
            movie.coStar = result.name;
            movie.coStarID = result.actor_id;
        }

        result = await directorSearch(movie.movie_id)
        if (result != undefined) {
            movie.director = result.name;
            movie.directorID = result.director_id;
        }

        if(movie) {
            return (
                <Movie movie={movie}/>
    
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