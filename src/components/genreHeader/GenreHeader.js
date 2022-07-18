
import './GenreHeader.scss';

const GenreHeader = ({genre, idKey}) => {
    genre = genre.toUpperCase()
    return(
    <div className="main_collection_header">
        <h2>{genre}</h2>
    </div>
    )
}

export default GenreHeader;