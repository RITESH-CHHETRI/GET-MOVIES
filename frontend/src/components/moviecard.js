
import React, { useState, useEffect } from "react";
import './moviecard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ movie }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorited(favorites.includes(movie.id));
    }, [movie.id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorited) {
            const updatedFavorites = favorites.filter(id => id !== movie.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            localStorage.setItem('favorites', JSON.stringify([...favorites, movie.id]));
        }
        setIsFavorited(!isFavorited);
    }

    return (
        <div className="movie-card">
            {isFavorited ? (
                <FontAwesomeIcon icon={faHeart} className="favorite-icon" onClick={toggleFavorite} />
            ) : (
                <FontAwesomeIcon icon={faHeart} className="nonfavorite-icon" onClick={toggleFavorite} />
            )}
            <img src={movie.banner_image} alt={movie.title} className="movie-banner" />
            <div className="movie-info">
                <p className="year">{movie.year}</p>
                <h2 className="title">{movie.title}</h2>
                <p className="genre">{movie.genre}</p>
            </div>
        </div>
    );
}

export default MovieCard;