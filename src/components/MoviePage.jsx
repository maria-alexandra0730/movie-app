import React, { useState, useEffect } from 'react';
import Pagination from 'reactjs-hooks-pagination';
import MovieList from './MovieList';
//import Movie from './Movie';



const MoviePage = () => {

    const URL_API = 'http://localhost:5000/api/v1/movies'; //?per_page=20&filter=';

    // const URL_SEARCH = "http://localhost:5000/api/v1/movies?filter=";

    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
 
    useEffect(() => {
        const requestURL = `${URL_API}?per_page=10&page=${pageNo}&filter=${search}`;

        setIsLoading(true);

        fetch(requestURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.data);
                setIsLoading(false);
            }).catch(exc => setIsLoading(false));
    }, [pageNo, search]);

    return isLoading ? (<div>Incarca lista de filme ....</div>) : (
        <div>
            <MovieList movies={movies} />
            <div className="d-flex flex-row py-4 justify-content-end">
                <Pagination
                    pageNo={pageNo}
                    itemsCountPerPage={10}
                    totalItemsCount={2}
                    pageRangeDisplayed={1}
                    onChangePage={setPageNo}
                />
            </div>
        </div>
    );
}

export default MoviePage;