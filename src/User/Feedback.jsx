import React, { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    setRating(0);
    setDescription('');
    setTimeout(() => setSubmitted(false), 3000); 
  };

  return (
    <div className="feedback-container">
      <h2>Give Feedback</h2>

      {submitted && (
        <div className="success-message">Feedback submitted successfully!</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="stars">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <span
                key={index}
                className={`star ${starValue <= (hover || rating) ? 'filled' : ''}`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
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
