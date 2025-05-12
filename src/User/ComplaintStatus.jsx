import './ComplaintStatus.css'; 

function ComplaintStatus() {
  const complaints = [
    {
      id: 1,
      pname: 'AC',
      status: 'complaint-registered',
      udate: '01-04-2025',
      cdate: '20-03-2025',
      warranty: 'Valid till 20-03-2026',
    },
    {
      id: 2,
      pname: 'Fridge',
      status: 'complaint-in-process',
      udate: '01-03-2025',
      cdate: '25-02-2025',
      warranty: 'Expired on 25-02-2024',
    },
    {
      id: 3,
      pname: 'TV',
      status: 'resolved',
      udate: '01-02-2025',
      cdate: '30-01-2025',
      warranty: 'Valid till 30-01-2026',
    },
  ];

  const getStatusClass = (status) => {
    if (status === 'resolved') return 'status resolved';
    if (status === 'complaint-in-process') return 'status in-process';
    return 'status registered';
  };

  return (
    <div id="complaintStatus">
      <h1>Complaint Status</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Status</th>
            <th>Last Update</th>
            <th>Complaint Date</th>
            <th>Warranty</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.pname}</td>
              <td><span className={getStatusClass(c.status)}>{c.status}</span></td>
              <td>{c.udate}</td>
              <td>{c.cdate}</td>
              <td>{c.warranty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComplaintStatus;
