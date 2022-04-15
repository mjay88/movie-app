import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//8b1c4667
import MovieCard from "./MovieCard";

const API_url = "https://www.omdbapi.com?apikey=8b1c4667";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 // useEffect will run on the first render, so the api is loaded right away
 useEffect(() => {
  searchMovies("Batman");
}, []);
 
const resetInput = (e) =>{
  var code = e.keyCode || e.which;
  if(code === 13) {
    searchMovies(searchTerm)
    e.target.value = ""
  } 
}

  const searchMovies = async (title) => {
    const response = await fetch(`${API_url}&s=${title}`);
    const data = await response.json();
    //setMovies from useState
    setMovies(data.Search);
  };

 
  return (
    <div className="app">
      <h1>Michael's MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Movies"
          onKeyDown={resetInput}
        >
        </input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        //if the movies array is greater than 0
        movies.length > 0 ? (
          //map over movies array and render how ever many MovieCard components there are movies
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          //if array is zero or less, render this div
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }
    </div>
  );
};

export default App;
