import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Movie = (props) => {
  const [movie, setMovie] = useState()
  const id = props.match.params.id
}
const MovieCard = props => {
  const {title, director, metascore, stars} = movie
  return (
    <div className="save-wrapper">
    <div className ="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Link>
    </div>
    </div>
  )
};

export default MovieCard;
