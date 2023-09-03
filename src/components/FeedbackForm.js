import React, { useState } from 'react';
import star from './assets/star.png';

function FeedbackForm() {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <span className="rating">
          <img src={star} alt="star" />
        </span>
        <h1 className="heading">How did we do?</h1>
        <p className="content">
          Please let me know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <ul>
          {[1, 2, 3, 4, 5].map((rating) => (
            <li
              key={rating}
              className={selectedRating === rating ? 'clicked' : ''}
              onClick={() => handleRatingClick(rating)}
            >
              {rating}
            </li>
          ))}
        </ul>
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;