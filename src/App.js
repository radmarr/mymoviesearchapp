import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

//3b53aeee

const API_URL = "http://www.omdbapi.com?apikey=3b53aeee";

const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};

const App = () => {
  //we call function which will fetch our movies
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    //response call our API
    const response = await fetch(`${API_URL}&s=${title}`); //`` is template string
    const data = await response.json();
    setMovies(data.Search);
  };

  //useEffect - fetch the data from API as soon as the component loads
  // ako hocemo da se samo 1 pozove na pocetku koristimo prazan array []
  useEffect(() => {
    searchMovies("Spiderman"); //ovde zovemo searchMovies f-ju
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {
        movies?.lenght > 0
        
      }

      <div className="container">
        <MovieCard movie1={movies[0]} />
      </div>
    </div>
  );
};

//input je selfclosing tag i mora da ima placeholder, value

export default App;
