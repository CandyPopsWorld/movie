import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from '../../../services/movie';
import Footer from "../../footer/Footer";

import './SingleMoviePage.scss';

const SingleMoviePage = () => {

    const movie = new Movie();

    const {filmId} = useParams();

    const [movieData, setMovieData] = useState([]);
    const [movieImagesData, setMovieImagesData] = useState([]);
    const [movieBudgetData, setMovieBudgetData] = useState([]); 
    const [movieFactsData, setMovieFactsData] = useState([]);
    const [movieStaffData, setMovieStaffData] = useState([]);
    const [movieVideoData, setMovieVideoData] = useState([]);

    const getDataMovie = () => {
        movie.getMovieId(filmId)
        .then(res => {
            setMovieData(res);
        })

        movie.getImagesMovieId(filmId)
        .then(res => {
            setMovieImagesData(res);
        })

        movie.getBudgetMovieId(filmId)
        .then(res => {
            setMovieBudgetData(res);
        })

        movie.getFactsMovieId(filmId)
        .then(res => {
            setMovieFactsData(res);
        })

        movie.getStaffMovieId(filmId)
        .then(res => {
            setMovieStaffData(res);
        })

        movie.getVideoMovieId(filmId)
        .then(res => {
            setMovieVideoData(res);
        })


    }

    useEffect(() => {
        getDataMovie();
    }, [])

    const {name, description, enName, ratingAge, slogan, year, countries, genres, length, rating, reviewsCount, poster} = movieData;
    const budget = movieBudgetData;
    const images = movieImagesData;
    const facts = movieFactsData;
    const video = movieVideoData;
    const staff = movieStaffData;
    console.log(filmId);
    return(
        <>
            <Header/>
            <View
            name={name}
            description={description}
            enName={enName}
            ratingAge={ratingAge}
            slogan={slogan}
            year={year}
            countries={countries}
            genres={genres}
            length={length}
            rating={rating}
            reviewsCount={reviewsCount}
            poster={poster}
            budget={budget}
            images={images}
            facts={facts}
            video={video}
            staff={staff}/>
            <Footer/>
        </>
    )
}

const Header = () => {
    return (
        <header className="headerSingle">
        <div className="headerSingle_main">
            <div className="headerSingle_item header_first">
                <div className="headerSingle_burger">☰</div>

                <div className="headerSingle_logo">
                    KINOPOISK
                </div>
            </div>

            <div className="headerSingle_item header_second">
                <div className="headerSingle_link">
                    <Link to='/'>Главное</Link>
                </div>

                <div className="headerSingle_link">
                    <Link to=''>Магазин</Link>
                </div>

                <div className="headerSingle_link">
                    <Link to="">Моё</Link>
                </div>

                <div className="headerSingle_link">
                    <Link to="">Телеканалы</Link>
                </div>

                <div className="headerSingle_link">
                    <Link to="">Спорт</Link>
                </div>

                <div className="headerSingle_search">
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt=""/>
                </div>
            </div>

            <div className="headerSingle_item header_three">
                <div className="headerSingle_loadtv">
                    <div className="header_loadtv_logo">
                        <img src="https://avatars.mds.yandex.net/get-bunker/118781/1bed25da2e176ee99658eafff85ebe9a80ca0601/orig" alt=""/>
                    </div>

                    <div className="headerSingle_loadtv_text">
                        Установить на ТВ
                    </div>

                    <div className="headerSingle_user_logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg_poster">
            <img className="img_poster" src="https://images.unsplash.com/photo-1658078875575-bf8e38589e44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>        
        </div>
    </header>
    )
}

const View = ({name, description, enName, ratingAge, slogan, year, countries, genres, length, rating, reviewsCount, poster, budget, images, facts, video, staff}) => {

    // Возрастной Рейтинг
    if(ratingAge){
        ratingAge = ratingAge.replace('age', '');
    }

    // Рейтинг Фильма
    if(Number.isInteger(rating)){
        rating += '.0';
    }
    let styleRating = {'color': null};
    if(+rating > 7) {
        styleRating.color = 'green';
    } else if (+rating > 5 && +rating < 7){
        styleRating.color = 'yellow';
    } else {
        styleRating.color = 'red';
    }

    //Страны
    let countries_elements = [];
    if(countries) {
        countries_elements = countries.map((item, i) => {
            return <span key={i}>{item.country}</span>
        })
    }

    //Жанры
    let genres_elements = [];
    if(genres) {
        genres_elements = genres.map((item, i) => {
            return <span key={i}>{item.genre}</span>
        })
    }

    //Бюджет
    let budget_element = null;
    if(budget.length > 0){
        budget_element = budget[0].amount;
    }

    //Изображения
    let images_elements = null;
    if(images){
        images_elements = images.map((item, i) => {
            return (
                <div className="image_list_item" key={i}>
                    <img src={item.imageUrl} alt="poster"/>
                </div>
            )
        })
    }

    //Видео
    let video_element = null;
    if(video.length > 0){
        video_element = <video muted src={video[0].url}></video>;
    }

    //Факты
    let facts_elements = null;
    if(facts){
        facts_elements = facts.map((item, i) => {
            let style = 'green';
            if(item.spoiler){
                style = 'red';
            }

            return (
            <div key={i} dangerouslySetInnerHTML={{__html: item.text}} className="facts_list_item" style={{color: style}}>
            </div>
            )
        })
    }

    //Персонал

    let actors = [];
    let reziser = [];
    let produser = [];
    let writer = [];
    let operator = [];
    let composer = [];
    let design = [];
    let editor = [];

    staff.forEach(item => {
        if(item.professionKey === 'DIRECTOR'){
            reziser.push(item.nameRu);
        }

        if(item.professionKey === 'ACTOR'){
            actors.push(item.nameRu);
        }

        if(item.professionKey === 'PRODUCER'){
            produser.push(item.nameRu);
        }

        if(item.professionKey === 'WRITER'){
            writer.push(item.nameRu);
        }

        if(item.professionKey === 'OPERATOR'){
            operator.push(item.nameRu);
        }

        if(item.professionKey === 'COMPOSER'){
            composer.push(item.nameRu);
        }

        if(item.professionKey === 'DESIGN'){
            design.push(item.nameRu);
        }

        if(item.professionKey === 'EDITOR'){
            editor.push(item.nameRu);
        }
    })

    const setStaff = (arr) => {
        return arr.map((item, i) => {
            if(i < 6){
                return <span key={i}><a className="staff_link" href="">{item}</a></span>
            }
        })
    }

    const setActors = (actors) => {
        return actors.map((item, i) => {
            if(i < 6) {
                return (
                    <div key={i} className="actor"><a className="staff_link" href="">{item}</a></div>
                )
            }
        })
    }

    const actors_elements = setActors(actors);
    const reziser_elements = setStaff(reziser);
    const produse_elements = setStaff(produser);
    const writer_elements = setStaff(writer);
    const operator_elements = setStaff(operator);
    const composer_elements = setStaff(composer);
    const design_elements = setStaff(design);
    const editor_elements = setStaff(editor);


    return (
        <>
        <main className="mainSingle">
            <div className="mainSingle_grid">
                <div className="mainSingle_grid_item mainSingle_grid_item_preview">
                    <img src={poster} alt=""/>
                    {video_element}
                </div>

                <div className="mainSingle_grid_item mainSingle_grid_item_about_movie">
                    <div className="textHeader">
                        <h1>{name}</h1>
                    </div>

                    <div className="textHeader_en_small">
                        {enName ? enName : name}
                        <div className="agePreview">{`${ratingAge}+`}</div>
                    </div>

                    <div className="description">
                        {description}
                    </div>

                    <div className="annotation">
                        {slogan}
                    </div>

                    <span className="about_text">О фильме</span>

                    <div className="table_about_movie">
                        <div className="table_item year_of_production">
                            <span>Год производства:</span>
                            <span>{year}</span>
                        </div>

                        <div className="table_item country">
                            <span>Страна:</span>
                            {countries_elements}
                        </div>

                        <div className="table_item genre">
                            <span>Жанр:</span>
                            {genres_elements}
                        </div>

                        <div className="table_item slogan">
                            <span>Слоган:</span>
                            <span>{`«${slogan}»`}</span>
                        </div>

                        <div className="table_item regiser">
                            <span>Режиссер:</span>
                            {reziser_elements}
                        </div>

                        <div className="table_item scenariu">
                            <span>Сценарий:</span>
                            {writer_elements}
                        </div>

                        <div className="table_item produser">
                            <span>Продюссер:</span>
                            {produse_elements}
                        </div>

                        <div className="table_item operator">
                            <span>Оператор:</span>
                            {operator_elements}
                        </div>

                        <div className="table_item compositor">
                            <span>Композитор:</span>
                            {composer_elements}
                        </div>

                        <div className="table_item hudoznik">
                            <span>Художник:</span>
                            {design_elements}
                        </div>

                        <div className="table_item montage">
                            <span>Монтаж:</span>
                            {editor_elements}
                        </div>

                        <div className="table_item budjet">
                            <span>Бюджет:</span>
                            <span>{`$${budget_element}`}</span>
                        </div>

                        <div className="table_item age">
                            <span>Возраст:</span>
                            <span>{`${ratingAge}+`}</span>
                        </div>

                        <div className="table_item time">
                            <span>Время:</span>
                            <span>{`${length} мин.`}</span>
                        </div>
                    </div>
                </div>

                <div className="mainSingle_grid_item mainSingle_grid_item_stars">
                    <div className="rating_item">
                        <span className="rating" style={styleRating}>{rating}</span>
                        <div className="count_rating">
                            <span>{reviewsCount}</span> Оценок
                        </div>
                    </div>

                    <div className="actors_item">
                        <span>В главных ролях</span>
                        {actors_elements}
                    </div>
                </div>
            </div>
        </main>

        <div className="block_image">
            <h1>ИЗОБРАЖЕНИЯ</h1>

            <div className="image_list">
                {images_elements}
            </div>
        </div>

        <div className="block_facts">
            <h1>ФАКТЫ</h1>

            <div className="facts_list">
                {facts_elements}
            </div>
        </div>
        </>
    )
}

export default SingleMoviePage;