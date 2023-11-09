import { useEffect, useState } from 'react';
import { getTrending } from 'services/ApiRequests';
import { Link, useParams } from 'react-router-dom';

export const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => {
        setTrendingMovies(data.results);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const data = useParams();
  console.log(data);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(movie => {
          console.log(movie);
          return (
            <li key={movie.id}>
              {' '}
              <Link to={movie.id}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
