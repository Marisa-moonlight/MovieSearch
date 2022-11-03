import React, { useState, useEffect } from 'react';
import './App.css';
const search = prompt("Search")

function Search() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=ca402a93&s=${search}`;
    const fetchdata = async () => {
      try {
        const responce = await fetch(url);
        const json = await responce.json();
        console.log(json.Search)
        setMovies(json.Search);
      } catch (error) {
        console.log(error)
      }
    }
    fetchdata();
  }, [])


  return (
    <div>
      {movies.map(movie => {
        return (
          <div>
            <div className='list'>
            <div><img src={movie.Poster}></img></div>
            <div><h1>{movie.Title}</h1></div>
            </div>
          </div>)
      })}
    </div>
  )
};

export default Search;