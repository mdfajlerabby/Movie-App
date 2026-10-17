import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import {useState} from "react";
import {searchMovies, getPopularMovies} from "../services/api";

const Home = () => {
  const [searchHandle, setSearchHandle] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      }catch (err){
        console.log(err);
        setError('Failed to fetch popular movies. Please try again later.');
      }
      finally{
        setLoading(false);
      }
    }
    loadPopularMovies();
  }, [])
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchHandle}`);
  }
  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movie..." value={searchHandle} onChange={(e) => setSearchHandle(e.target.value)} />
            <button type="submit" className="search-button">
                 Search
            </button>
        </form>

        {error && <div className="error">{error}</div>}

        {loading ? (
          <div className="loading">Loading....</div>
        ):(
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        )}
      
    </div>
  );
};

export default Home;
