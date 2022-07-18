class Movie {
    _apiBase = 'https://kinopoiskapiunofficial.tech';
    getResource = async (url) => {
        let res = await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'db1c50b2-d10e-412e-8ecd-181835a2a6a0',
                    'Content-Type': 'application/json'
                }
            },
        )

        if(!res.ok){
            throw new Error(`Ошибка запроса: ${url}, статус: ${res.status}`);
        }

        return await res.json();
    }

    //Получить изображения фильма по ID
    getImagesMovieId = async (id) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films/${id}/images`);
        return res.items;
    }

    //Получить трейлеры, тизеры, видео фильма по ID
    getVideoMovieId = async (id) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films/${id}/videos`);
        return res.items;
    }

    //Получить данные о фактах и ошибках в фильме по ID
    getFactsMovieId = async (id) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films/${id}/facts`);
        return res.items;
    }

    //Получить данные о бюджете и сборах фильмах по ID
    getBudgetMovieId = async (id) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films/${id}/box_office`);
        return res.items;
    }

    //Получить данные о наградах фильма по ID
    getAwardsMovieId = async (id) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films/${id}/awards`);
        return res.items;
    }

    //Получить список рецензии о фильме по ID
    getReviewsMovieId = async (id) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films/${id}/reviews`);
        return res.items;
    }

    //Получить данные об актерах фильма по ID
    getStaffMovieId = async (id) => {
        const res = await this.getResource(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`);
        return res;
    }

    //Получить БАЗОВЫЕ данные о фильме
    getMovieId = async (id) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films/${id}`);
        return this._transformMovie(res);
    }

    //Получить коллекцию фильмов
    getMovieCollection = async (genre, page) => {
        const res = await this.getResource(`${this._apiBase}/api/v2.2/films?genres=${genre}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`);
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
            enName: path.nameEn,
            poster: path.posterUrl,
            logoPoster: path.logoUrl,
            reviewsCount: path.reviewsCount,
            slogan: path.slogan,
            description: path.description,
            shortDescription: path.shortDescription,
            genres: path.genres,
            rating: path.ratingKinopoisk,
            ratingAge: path.ratingAgeLimits,
            year: path.year,
            length: path.filmLength,
            originalWebsite: path.webUrl,
            annotation: path.editorAnnotation,
            countries: path.countries
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