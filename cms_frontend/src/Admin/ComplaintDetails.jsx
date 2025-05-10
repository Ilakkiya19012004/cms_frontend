import { useParams, useLocation } from "react-router-dom";

function ComplaintDetails() {
  const { id } = useParams();
  const { state: complaint } = useLocation();
  
  return (
    <div>
      <h2>Complaint Details</h2>
      <p><strong>Ticket ID:</strong> #{id}</p>
      <p><strong>Product:</strong> {complaint.pname}</p>
      <p><strong>Status:</strong> {complaint.status}</p>
      <p><strong>Description:</strong> {complaint.description}</p>
    </div>
  );
}

export default ComplaintDetails;
