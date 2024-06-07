import React from 'react';
import MovieCard from './moviecard';
import './movielist.css'; // Assuming you have a CSS file for styling

const SearchMovies = ({ movies }) => {
  return (
    <div>
        <h2>Search Results</h2>
    <div className="movie-list">
       
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </div>
  );
};

export default SearchMovies;