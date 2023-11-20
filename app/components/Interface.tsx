export interface movie {
    movie_id: number,
    name: string,
    genre: string,
    relYear: string,
    earnings: number,
    rating: string,
    plot: string,
    poster: string,
    star: string,
    starID: number,
    coStar: string,
    coStarID: number,
    director: string,
    directorID: number
}

export interface moviePoster {
    name: string, 
    poster: string, 
    movie_id: number
}