import React, { useState } from 'react';
import './Feedback.css';
function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${rating} stars, Description: ${description}`);
  };

  return (
    <div className="feedback-container">
      <h2>Give Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="stars">
          {[...Array(5)].map((star, index) => {
            const starValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={starValue}
                  onClick={() => setRating(starValue)}
                />
                <span
                  className={`star ${starValue <= (hover || rating) ? 'filled' : ''}`}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                >★</span>
              </label>
            );
          })}
        </div>

        <textarea
          placeholder="Describe your experience..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;