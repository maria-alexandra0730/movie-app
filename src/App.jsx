import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import MoviePage from './components/MoviePage';
import NewsPage from './components/NewsPage';
import Navbar from './components/Navbar';
import './App.css';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/news" component={NewsPage} />
              <Route path="/movies" component={MoviePage} />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    )
  }
}
export default App;
