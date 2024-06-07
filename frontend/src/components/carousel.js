import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const movies = [
    {
        id: 1,
        title: "Spider-Man: Into The Spider Verse",
        description: "Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to 2018’s 'Spider-Man: Into the Spider-Verse'.",
        image: "/images/spiderman.jpg"
    },
    {
        id: 2,
        title: "Aavesham",
        description: "Three teenagers reach Bangalore for their engineering degree and gets involved in a fight with seniors. They find a local gangster named Ranga to help them take revenge.",
        image: "/images/aavesham.jpg"
    },
    {
        id: 3,
        title: "Manjummel Boys",
        description: "A group of friends get into a daring rescue mission to save their friend from Guna Caves, a perilously deep pit from where nobody has ever been brought back.",
        image: "/images/mannumel.jpg"
    }
];

const MovieCarousel = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={true}
        >
            {movies.map((movie) => (
                <div key={movie.id} className="carousel-slide">
                    <img src={movie.image} alt={movie.title} className="carousel-image"/>
                    <div className="carousel-caption">
                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                <button className="carousel-button">
                <span className="icon-circle">
                    <FontAwesomeIcon icon={faPlay} />
                </span>
                 Watch Trailer
            </button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default MovieCarousel;
