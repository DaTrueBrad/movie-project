import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie }) => {
  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">
        {list.map((movie, index) => {
          return (
            <MovieCard movie={movie} removeMovie={removeMovie} list={list} />
          );
        })}
      </div>
    </div>
  );
};

export default Watchlist;
