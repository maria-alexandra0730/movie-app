import React from 'react';
//import movies_photo from './movies_background.jpg';
import './styles/Movie.css';

const img_array = [ "angry", "commandments", "duel" ];
  const images = img_array.map(img => {
    return <img key={img} src={require(`../../img/${img}.png`)} className="img-container" />
    });

const Movie = ({ Title, release_date, imdb_rating }) => (

    <div className="movie">
        {/* <div className="img-posters"> */}
        {/* </div> */}
        <div className="movie-details">
            <span className="date-style">{release_date}</span>
            { images }
            <h3>{Title}</h3>
            <span className="rating_style">{imdb_rating}</span>
        </div>
    </div>
);

export default Movie;