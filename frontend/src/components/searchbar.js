import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFilm, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './searchbar.css';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, goHome }) => {
    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query === "") {
            goHome();
        } else {
            handleSearch(query);
        }
    };
    const clearInput = () => {
        setSearchQuery('');
        goHome();
    };

    return (
        <div className="search-bar-container">
            <Link to="/" style={{ textDecoration: 'none' }} onClick={goHome}>
                <button className="get-movies-btn" onClick={() => handleSearch(searchQuery)}>
                    <span className="icon-circle">
                        <FontAwesomeIcon icon={faFilm} />
                    </span>
                    GET MOVIES
                </button>
            </Link>
            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search movies and series"
                />
                {searchQuery && (
                    <button onClick={clearInput} className="clear-button">
                        x
                    </button>
                )}
            </div>
            <Link to="/favorites" className="favorites-btn" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faHeart} style={{ marginRight: '8px' }}/> My favourites
            </Link>
        </div>
    );
};

export default SearchBar;
