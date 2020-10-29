import React, { useState, useEffect } from 'react';
// import Pagination from './Pagination';
import MovieList from './MovieList';
//import Movie from './Movie';
import './MoviePage.css';



const MoviePage = () => {

    const URL_API = 'http://localhost:5000/api/v1/movies';

    // const URL_SEARCH = "http://localhost:5000/api/v1/movies?filter=";

    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [search, setSearch] = useState("");
    //  const [ moviesPerPage ] = useState(10);
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
        // alert(`Submitting search ${search}`)

    };

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }

    // const = (pageNo) => {
    //     console.log(`${pageNo}`);
    //     setPageNo(pageNo);
    //   }


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
            {/* <form onSubmit={handleOnSubmit}>
                    <input 
                        type="text" 
                        className="search-box" 
                        placeholder="Find your favourite movie..."
                        value={search}
                        onChange={handleOnChange}
                    />
                    <button type="submit" className="searchButton">Go
                    </button>
            </form> */}
            <MovieList movies={movies} />
            {/* <ul className="pagination">
                {pageNo.map(number => (
                    <li className="page-item" key={number}>
                        <a href="!#" className="page-link">{number}</a>
                    </li>
                ))}
            </ul> */}
            {/* <Pagination
                totalItems={totalItems}
                perPage={perPage}
                totalPages={totalPages}
                onChangePage={setPageNo}
            /> */}
        </div>
    );
}

export default MoviePage;