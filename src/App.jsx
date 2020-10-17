import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import './App.css';

const URL_API = "http://localhost:5000/api/v1/movies?per_page=20";

function App() {
  const [ movies, setMovies ] = useState([]);

  // const img_array = [ "angry", "commandments", "duel" ];
  // const images = img_array.map(img => {
  //   return <img key={img} src={require(`../img/${img}.png`)} className="img-container" />
  //   });

  useEffect(() => {
    fetch(URL_API)
      .then((res) => res.json())
      .then((data) => { console.log(data);
        setMovies(data.data);
      });
  }, []);

  return (
    <div className="app-container">
      {movies.length > 0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie}/>
      ))}
      {/* { images } */}
    </div>
  )
}
export default App;
