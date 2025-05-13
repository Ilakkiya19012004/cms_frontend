import { Link } from 'react-router-dom'; 
import './AllComplaints.css';
import AdminNavbar from './AdminNavbar';

function AllComplaints() {
  const complaints = [
    { id: 1, pname: 'AC', status: 'complaint-registered', udate: '01-04-2025', cdate: '20-03-2025', warranty: '2 years', phone: '123-456-7890', email: 'customer1@example.com', description: 'AC not cooling properly' },
    { id: 2, pname: 'Fridge', status: 'complaint-in-process', udate: '01-03-2025', cdate: '25-02-2025', warranty: '1 year', phone: '987-654-3210', email: 'customer2@example.com', description: 'Fridge making noise' },
    { id: 3, pname: 'TV', status: 'resolved', udate: '01-02-2025', cdate: '30-01-2025', warranty: '3 years', phone: '555-888-7777', email: 'customer3@example.com', description: 'TV screen flickering' }
  ];

  const getStatusClass = (status) => {
    if (status === 'resolved') return 'status resolved';
    if (status === 'complaint-in-process') return 'status in-process';
    return 'status registered';
  };

  const filteredComplaints = complaints.filter(c => c.status === 'complaint-registered' || c.status === 'complaint-in-process');

  return (
    <>
    <AdminNavbar/>
    <div id="complaintStatus">
      <h1>All Complaints</h1>
      <div style={{ overflowX: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Status</th>
            <th>Warranty</th>
            <th>Customer Phone</th>
            <th>Last Update</th>
            <th>Complaint Date</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.pname}</td>
              <td><span className={getStatusClass(c.status)}>{c.status}</span></td>
              <td>{c.warranty}</td>
              <td>{c.phone}</td>
              <td>{c.udate}</td>
              <td>{c.cdate}</td>
              <td><Link to={`/complaint-details/${c.id}`} state={c}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
}

export default AllComplaints;
