import { Component } from 'react';
import { Link } from 'react-router-dom';
import Movie from '../../services/movie';
import './Poster.scss';

class Poster extends Component{

    aboutMovie = (id) => {
        console.log(id);
    }

    watchMovie = (id) => {
        console.log(id);
    }

    render(){
        const {name, description, idKey} = this.props;
        return(
            <div className="header_poster" key={idKey}>
                <div className="header_poster_h1">
                    <h1>{name}</h1>
                </div>
    
                <div className="header_poster_description">
                    {/* Расследуя серию убийств, Мажор сам оказывается под подозрением. Продолжение экшен-сериала с Павлом Прилучным */}
                    {description}
                </div>
    
                <div className="header_poster_buttons">
                    <Link to={`/film/${idKey}`} className="header_poster_watch_button">
                        <button>▶ Смотреть Онлайн</button>
                    </Link>
    
                    <Link to={`/film/${idKey}`} className="header_poster_about_button">
                        <button>
                            <img src="https://cdn-icons-png.flaticon.com/512/106/106878.png" alt=""/>О фильме
                        </button>
                    </Link>
    
                    <div className="header_poster_bookmark_button">
                        <button><img src="https://img.icons8.com/color/344/bookmark-ribbon--v2.png" alt=""/></button>
                    </div>
    
                    <div className="header_poster_not_interested_button">
                        <button><img src="https://icons.veryicon.com/png/o/internet--web/monochrome-linear-icon/not-opened-1.png" alt=""/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Poster;