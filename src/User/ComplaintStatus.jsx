import './ComplaintStatus.css'; 
import UserNavbar from './UserNavbar';

import { Link } from 'react-router-dom';
function ComplaintStatus() {
  const complaints = [
    {
      id: 1,
      pname: 'AC',
      status: 'complaint-registered',
      servicetype:'home service',
      udate: '01-04-2025',
      cdate: '20-03-2025',
      warranty: 'Valid till 20-03-2026',
      description:'Ac not cooling'
    },
    {
      id: 2,
      pname: 'Fridge',
      status: 'complaint-in-process',
      servicetype:'home service',
      udate: '01-03-2025',
      cdate: '25-02-2025',
      warranty: 'Expired on 25-02-2024',
      description:'Ac not cooling'
    },
    {
      id: 3,
      pname: 'TV',
      status: 'resolved',
      servicetype:'home service',
      udate: '01-02-2025',
      cdate: '30-01-2025',
      warranty: 'Valid till 30-01-2026',
      description:'Ac not cooling'
    },
  ];

  const getStatusClass = (status) => {
    if (status === 'resolved') return 'status resolved';
    if (status === 'complaint-in-process') return 'status in-process';
    return 'status registered';
  };

  return (
    <>
    <UserNavbar/>
    <div id="complaintStatus">
      <h1>Complaint Status</h1>
      
       <div style={{ overflowX: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Status</th>
            <th>Service Type</th>
            <th>Last Update</th>
            <th>Complaint Date</th>
            <th>Warranty</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.pname}</td>
              <td><span className={getStatusClass(c.status)}>{c.status}</span></td>
              <td>{c.servicetype}</td>
              <td>{c.udate}</td>
              <td>{c.cdate}</td>
              <td>{c.warranty}</td>
              <td><Link to={`/ucomplaint-details/${c.id}`} state={c}>View Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
}

export default ComplaintStatus;
