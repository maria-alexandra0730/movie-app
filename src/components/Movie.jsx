import React from 'react';
import './Movie.css';

const Movie = ({ title, releaseDate, posterurl, storyline, imdbRating }) => (

        <div className="movie">
            <h3>{title}</h3>
            <img src={posterurl} alt="img" />
            <div className="movie-details">

                <span className="date-style">{releaseDate}</span>
                <span className="rating_style">{imdbRating}/10</span>
            </div>
            <div className="movie-description">
                <h4>Description:</h4>
                <p>{storyline}</p>
            </div>
        </div>

);

export default Movie;