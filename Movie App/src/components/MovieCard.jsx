const MovieCard = ({movie}) => {
    function onFavoriteClick(){
        alert("Clicked");
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-overplay">
                <button className="favorite-btn" onClick={onFavoriteClick}>🤍</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>;
};

export default MovieCard;