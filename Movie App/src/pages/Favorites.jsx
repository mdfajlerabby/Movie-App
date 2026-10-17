import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
    const{favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className='favorites'>
                <h2>Your Favorites Movie</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        )
    }

    return <div className="favorites-empty">
        <h3>No favorite movies yet.</h3>
        <p>Start adding movies to your favorites!</p>
    </div>
};

export default Favorites;