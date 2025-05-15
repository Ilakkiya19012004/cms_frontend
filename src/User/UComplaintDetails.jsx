import { useParams, useLocation } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import './UComplaintDetails.css';

function UComplaintDetails() {
  const { id } = useParams();
  const { state: complaint } = useLocation();

  return (
    <>
      <UserNavbar />
      <div className="complaint-container">
        <h2>Complaint Details</h2>
        <p><strong>Ticket ID:</strong> #{id}</p>
        <p><strong>Product:</strong> {complaint.pname}</p>

        <div className="status-section">
          <label><strong>Status:</strong></label>
          <p>{complaint.status}</p>
        </div>

        <p><strong>Description:</strong> {complaint.description}</p>
      </div>
    </>
  );
}

export default UComplaintDetails;
