import mysql from 'mysql2/promise'

export async function nameSearch(name: string) {
    const db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_TABLE
    });

    const [result] = await db.query("SELECT * FROM Movies WHERE name SOUNDS LIKE ?", [name])
    const info = result[0]

    return info
}

export async function actorSearch(name: string) {
    const db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_TABLE
    });

    const [result] = await db.query("SELECT Cast.movie, Cast.name, Cast.actor, Movies.poster FROM Cast JOIN Movies WHERE Cast.movie = Movies.name AND Cast.actor = ?", [name])

    return result
}
