import React from 'react';
import Movie from './Movie';


const MovieList = (props) => {

    const {
        movies
    } = props;
    
    if (!movies || movies.length === 0) {
        return (
            <div>No movies here.</div>
        );
    }

    return (
        <div className="movie-container">
            {movies.length > 0 && movies.map((movie) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
}
export default MovieList;