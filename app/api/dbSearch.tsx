import mysql from 'mysql2/promise'

export async function nameSearch(name: string) {
    const db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_TABLE
    });

    const [result] = await db.query("SELECT * FROM Movies WHERE name = ?", [name])

    return result[0]
}
