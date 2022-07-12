import React from "react";

const MovieCard = ({ movie, addMovie, removeMovie, list }) => {

  const added = list.filter((mov) => {
    return mov === movie;
  });
  
  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      <div className="btn-container">
        {/* <button>Details</button> */}
        {added.length !== 0 ? (
          <button onClick={() => removeMovie(movie)}>Remove</button>
        ) : (
          <button onClick={() => addMovie(movie)}>Add to List</button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
