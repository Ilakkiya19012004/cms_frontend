import { useLocation, useParams } from "react-router-dom";
import './ComplaintStatus.css';
function ComplaintStatus() {
    const complaints=[
        {id: 1, pname: 'AC', status: 'complaint-registered', udate: '01-04-2025' ,cdate:'20-03-2025'},
        {id: 2, pname: 'Fridge', status: 'complaint-in-process', udate: '01-03-2025' ,cdate:'25-02-2025'},
        {id: 3, pname: 'TV', status: 'resolved', udate: '01-02-2025' ,cdate:'30-01-2025' },
    ];
    return (
        <div>
            <h1>Complaint Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID   </th>
                        <th>product name   </th>
                        <th>Status   </th>
                        <th>Last Updation Date   </th>
                        <th>Complaint Registered Date   </th>
                    </tr>
                </thead>

                <tbody>
                    {complaints.map((complaint)=>(
                        <tr key={complaint.id}>
                            <td>{complaint.id}</td>
                            <td>{complaint.pname}</td>
                            <td>{complaint.status}</td>
                            <td>{complaint.udate}</td>
                            <td>{complaint.cdate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ComplaintStatus;
