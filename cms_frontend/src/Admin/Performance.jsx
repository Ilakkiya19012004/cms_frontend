import React from 'react'

const performances=[
  {id:1, rating:4, feedback:'Good'},
  {id:2, rating:3, feedback:'Moderate'},
  {id:3, rating:2, feedback:'Bad'},
  {id:4, rating:4, feedback:'Good'}
]

export default function Performance() {
  const total=performances.reduce((sum, p)=>sum+p.rating, 0);
  const avg=total/4;
  return (
    <>
    <div>Performance</div>
    <table>
      <thead>
        <tr>
          <th>Ratings</th>
          <th>Feedbacks</th>
        </tr>
      </thead>
      <tbody>
        {performances.map((feedback)=>(
          <tr key={feedback.id}>
          <td>{feedback.rating}</td>
          <td>{feedback.feedback}</td>
          {over_all_rating}=({over_all_rating}+{feedback.rating})/2;
      </tr>
        ))}
      </tbody>
    </table>

    <p>Overall Performance:{avg}</p>
    </>
  )
}
