import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import MoviePage from './components/MoviePage';
import DetailsPage from './components/DetailsPage';

import './App.css';



function App() {


  const handleOnSubmit = (e) => {
    e.preventDefault();

    // fetch(URL_SEARCH + search)
    //   .then((res) => res.json())
    //   .then((data) => { console.log(data);
    //     setMovies(data.data);
    //   });
  };

  const handleOnChange = (e) => {
    // setSearch(e.target.value);
  }

  return (
    <React.Fragment>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            // value={search}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">MoviePage</Link></li>
              <li><Link to="/details">DetailsPage</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={MoviePage} />
            <Route path="/details" component={DetailsPage} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  )
}
export default App;
