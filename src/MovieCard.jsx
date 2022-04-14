import React from 'react';
//when can just take movie directly from props instead of having to do props.movie everytime, react props object desctructuring
const MovieCard = ({movie}) => {

 

    return(
        <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    )
}

export default MovieCard;