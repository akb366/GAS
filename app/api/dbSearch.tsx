import mysql from 'mysql2/promise'
import { movie } from '../components/Interface';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TABLE
});

export async function movieIDSearch(id: number) {

    var [result] = await db.query("SELECT * FROM Movies WHERE movie_id = ?", [id])
    var info: movie = result[0]

    return info
}

export async function searchResults(name: string) {

    var [result] = await db.query("SELECT name, poster, movie_id FROM Movies WHERE name LIKE ? LIMIT 25", ["%" + name + "%"]);
    if (result.length === 0) {
        var [result] = await db.query("SELECT name, poster, movie_id FROM Movies WHERE name SOUNDS LIKE ? LIMIT 25", [name]);
    }
    
    return result;
}

export async function actorSearch(actor_id: number) {

    const [result] = await db.query(`SELECT Actors.name as actor, Movies.name, Movies.poster, Movies.movie_id 
    FROM Cast JOIN Movies ON Cast.movie_id = Movies.movie_id JOIN Actors ON Cast.actor_id = Actors.actor_id WHERE Cast.actor_id =  ?`, [actor_id])

    return result
}

export async function topNine() {

    const [result] = await db.query("SELECT name, poster, movie_id FROM Movies ORDER BY earnings DESC LIMIT 9;")

    return result
    
}

export async function starSearch(movie_id: number, level: number) {

    const [result] = await db.query("SELECT Actors.name, Actors.actor_id FROM Actors JOIN Cast ON Cast.actor_id = Actors.actor_id WHERE Cast.movie_id = ? AND Cast.level = ?", [movie_id, level])

    if (result[0] != undefined) {
        return result[0]
    } else {
        return;
    }
    
}

export async function directorSearch(movie_id: number) {

    const [result] = await db.query("SELECT Director.name, Director.director_id FROM Director JOIN Direct ON Direct.director_id = Director.director_id WHERE Direct.movie_id = ?", [movie_id])

    if (result[0] != undefined) {
        return result[0]
    } else {
        return "Director";
    }
    
}

export async function random(other = 0, previous = 0) {

    if (other === 0) {
        if (previous === 0) {
            const [result] = await db.query("SELECT movie_id, poster, earnings FROM Movies ORDER BY RAND() LIMIT 1")
            return result[0]
        } else {
            const [result] = await db.query("SELECT movie_id, poster, earnings FROM Movies WHERE movie_id != ? ORDER BY RAND() LIMIT 1", [previous])
            return result[0]
        }
    } else {
        if (previous === 0) {
            const [result] = await db.query("SELECT movie_id, poster, earnings FROM Movies WHERE movie_id != ? ORDER BY RAND() LIMIT 1", [other])
            return result[0]
        } else {
            const [result] = await db.query("SELECT movie_id, poster, earnings FROM Movies WHERE movie_id != ? AND movie_id != ? ORDER BY RAND() LIMIT 1", [other, previous])
            return result[0]
        }
    }
}

export async function castList(movie_id: number) {
    const [result] = await db.query("SELECT Actors.name, Actors.actor_id FROM Actors JOIN Cast ON Cast.actor_id = Actors.actor_id WHERE Cast.movie_id = ?", [movie_id])

    if (result.length > 0){
        return result
    } else {
        return "no cast list"
    }
}
