import './AllComplaints.css';
import { Link } from 'react-router-dom';

function NewComplaints() {
  const complaints = [
    {
      id: 1,
      pname: 'AC',
      status: 'new-complaints',
      udate: '01-04-2025',
      cdate: '20-03-2025',
      warranty: 'Yes',
      phone: '9876543210',
      email: 'user1@example.com',
      description: 'AC not cooling properly'
    },
    {
      id: 2,
      pname: 'Fridge',
      status: 'complaint-in-process',
      udate: '01-03-2025',
      cdate: '25-02-2025',
      warranty: 'No',
      phone: '9876543222',
      email: 'user2@example.com',
      description: 'Fridge door not closing'
    },
    {
      id: 3,
      pname: 'TV',
      status: 'resolved',
      udate: '01-02-2025',
      cdate: '30-01-2025',
      warranty: 'Yes',
      phone: '9876543233',
      email: 'user3@example.com',
      description: 'TV screen flickering'
    }
  ];

  const newComplaints = complaints.filter(c => c.status === 'new-complaints');

  return (
    <div id="complaintStatus">
      <h1>New Complaints</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Complaint Date</th>
            <th>Phone</th>
            <th>Warranty</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {newComplaints.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.pname}</td>
              <td>{c.cdate}</td>
              <td>{c.phone}</td>
              <td>{c.warranty}</td>
              <td><Link to={`/complaint-details/${c.id}`} state={c}>View Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewComplaints;
