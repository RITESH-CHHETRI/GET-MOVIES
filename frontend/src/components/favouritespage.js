// src/components/FavoritesPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from './movielist';
import { faSearch,faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './movielist.css';
import './favouritespage.css';

const FavoritesPage = ({ allMovies }) => {
  const history = useNavigate();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const filtered = allMovies.filter(movie => favorites.includes(movie.id));
    setFavoriteMovies(filtered);
    setFilteredMovies(filtered);
  }, [allMovies]);

  useEffect(() => {
    const filtered = favoriteMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchQuery, favoriteMovies]);

  const goHome = () => {
    history('/');
  };
  return (
    <div className="favorites-page">
      <br></br>
      <button className="fav-header" onClick={goHome}> <FontAwesomeIcon icon={faLessThan} className='goback'/>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      My Favourites</button>
    <div className='fav-bar'>
        <FontAwesomeIcon icon={faSearch} className="fav-icon" />
        <input
        type="text"
        placeholder="Search from favourites"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}

      />
    </div>
    <br></br>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default FavoritesPage;
