import { Component } from 'react';
import NavPanel from '../navPanel/NavPanel';
import Poster from '../poster/Poster';
import Movie from '../../services/movie';

import './Header.scss';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            poster: []
        }
    }

    movie = new Movie();

    setPosterState = (result) => {
        this.setState({
            poster: result
        })
    }

    getPosterData = () => {
        const rand = Math.floor(Math.random() * (400 - 300) + 300);
        this.movie.getMovieId(rand)
        .then(this.setPosterState);
    }

    componentDidMount(){
        this.getPosterData();
    }

    render() {
        const {name, description, id, poster} = this.state.poster;
        return(
            <header className='header' style={{backgroundImage: `url(${poster})`}}>
                <NavPanel/>
                <Poster name={name} description={description} idKey={id}/>
            </header>
        )
    }
}

export default Header;