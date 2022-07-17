class Movie {
    _apiBase = 'https://kinopoiskapiunofficial.tech';
    getResource = async (url) => {
        let res = await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '8f2cce9f-d060-457b-83b2-2ef4de1eb884',
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                }
            },
        )

        if(!res.ok){
            throw new Error(`Ошибка запроса: ${url}, статус: ${res.status}`);
        }

        return await res.json();
    }

    getMovieId = async (id) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films/${id}`);
        return this._transformMovie(res);
    }

    getMovieCollection = async (genre) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films?genres=${genre}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`);
        return res.items.map(this._transformCollectionMovie);
    }

    // const getListGenre = async () => {
    //     const res = await getResource('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters');
    //     return res[1];
    // }

    _transformMovie = (path) =>{
        return {
            id: path.kinopoiskId,
            name: path.nameRu,
            poster: path.posterUrl,
            slogan: path.slogan,
            description: path.description,
            shortDescription: path.shortDescription,
            genres: path.genres,
            rating: path.ratingKinopoisk,
            ratingAge: path.ratingAgeLimits,
            year: path.year,
            length: path.filmLength,
            originalWebsite: path.webUrl
        }
    }

    _transformCollectionMovie = (item) => {
        return {
            id: item.kinopoiskId,
            name: item.nameRu,
            poster: item.posterUrl,
            rating: item.ratingKinopoisk
        }
    }
}

export default Movie;