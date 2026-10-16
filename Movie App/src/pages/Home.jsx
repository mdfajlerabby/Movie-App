import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      Title: "The Matrix",
      release_date: "1999-03-31",
    },
    {
      id: 2,
      Title: "Inception",
      release_date: "2010-07-16",
    },
    {
      id: 3,
      Title: "Interstellar",
      release_date: "2014-11-07",
    },
    {
      id: 4,
      Title: "The Dark Knight",
      release_date: "2008-07-18",
    },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    searchQuery("----------");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="serach-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) =>
        movie.Title.toLowerCase().startsWith(searchQuery) && (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default Home;
