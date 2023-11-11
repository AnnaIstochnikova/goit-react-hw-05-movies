import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../services/ApiRequests';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieReviews(id)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
  return (
    <ul>
      {reviews.map(review => {
        const id = nanoid();
        return (
          <li className="review-list" key={id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
