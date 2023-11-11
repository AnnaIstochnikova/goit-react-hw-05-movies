import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails, getFullPosterURL } from '../services/ApiRequests';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(id)
      .then(data => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const votePercentage = (movie.vote_average * 10).toFixed(0) + '%';

  return (
    <>
      <div className="movie-details-box">
        <img src={getFullPosterURL(movie.poster_path)} alt="" />
        <div>
          <h2>
            {movie.title} ({movie.release_date})
          </h2>
          {movie.overview}
          {movie.vote_average > 0 ? <p>User Score: {votePercentage}</p> : null}
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          {genres.length === 1 ? <h3>Genre</h3> : <h3>Genres</h3>}
          <p>{genres.map(genre => genre.name).join(`, `)}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <Link to={'cast'}>
          <p>Cast</p>
        </Link>
        <Link to={'reviews'}>
          <p>Reviews</p>
        </Link>
      </div>
    </>
  );
};
