import React from 'react';
import './Performance.css';  
import AdminNavbar from './AdminNavbar';
const performances = [
  { id: 1, rating: 4, feedback: 'Good' },
  { id: 2, rating: 3, feedback: 'Moderate' },
  { id: 3, rating: 2, feedback: 'Bad' },
  { id: 4, rating: 4, feedback: 'Good' }
];

export default function Performance() {
  const total = performances.reduce((sum, p) => sum + p.rating, 0);
  const avg = (total / performances.length).toFixed(2); 

  return (
    <><AdminNavbar/>
    <div className="performance-container">
      <h2>Performance</h2>
      <table>
        <thead>
          <tr>
            <th>Rating</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {performances.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.rating}</td>
              <td>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><strong>Overall Performance Rating:</strong> {avg}</p>
    </div>
    </>
  );
}
