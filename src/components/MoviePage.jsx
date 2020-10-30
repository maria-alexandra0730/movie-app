import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './MoviePage.css';



const MoviePage = () => {

    const URL_API = 'http://localhost:5000/api/v1/movies';

    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const requestURL = `${URL_API}?per_page=119&page=${pageNo}&filter=${search}`;

        setIsLoading(true);

        fetch(requestURL)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                setMovies(response.movies);
                setIsLoading(false);
                setPerPage(response.per_page);
                setTotalItems(response.total);
                setTotalPages(response.total_pages);
            }).catch(exc => setIsLoading(false));
    }, [pageNo, search]);


    const handleOnSubmit = (e) => {
        e.preventDefault();
    };

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }

    return isLoading ? (<div>Incarca lista de filme ....</div>) : (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    className="search-box"
                    placeholder="Find your favourite movie..."
                    value={search}
                    onChange={handleOnChange}
                />
            </form>
            <MovieList movies={movies} />
        </div>
    );
}

export default MoviePage;