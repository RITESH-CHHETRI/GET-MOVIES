import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MovieList from './components/movielist';
import SearchBar from './components/searchbar';
import MovieCarousel from './components/carousel';
import FavoritesPage from './components/favouritespage';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMainPage, setIsMainPage] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await fetch('https://hoomansbackend.onrender.com/api/movies');
        const data = await response.json();
        setMovies(data);
        setIsMainPage(true);
        setIsSearching(false);
    };

    const handleSearch = async () => {
        setIsSearching(true);
        const response = await fetch(`https://hoomansbackend.onrender.com/api/movies/search?title=${searchQuery}`);
        const data = await response.json();
        setMovies(data);
        setIsMainPage(false);
    };

    const goHome = () => {
        fetchMovies();
    };

    const MainContent = () => {
        const location = useLocation();
        return (
            <div>
                {location.pathname === '/' && isMainPage && <MovieCarousel />}
                {location.pathname === '/favorites' ? (
                    <h1>
                </h1>

                ) : (
                    !isSearching ? (
                        <h1>Movies</h1>
                    ) : (
                        <>
                            <h1>Search</h1>
                            <p className='length'>{movies.length} movies found.</p>
                        </>
                    )
                )}
                <Routes>
                    <Route path="/" element={<MovieList movies={movies} />} />
                    <Route path="/favorites" element={<FavoritesPage allMovies={movies} />} />
                </Routes>
            </div>
        );
    };

    return (
        <Router>
            <div>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearch={handleSearch}
                    goHome={goHome}
                />
                <MainContent />
            </div>
        </Router>
    );
};

export default App;
