import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import './ComplaintDetails.css';

function ComplaintDetails() {
  const { id } = useParams();
  const { state: complaint } = useLocation();

  const [status, setStatus] = useState(complaint.status);
  const [editedStatus, setEditedStatus] = useState(complaint.status);
  const [isEditing, setIsEditing] = useState(false);

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    setStatus(editedStatus);
    setIsEditing(false);

    // Optional: Send to backend
    // fetch(`/api/complaints/${id}/status`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ status: editedStatus })
    // });
  };

  return (
    <>
      <AdminNavbar />
      <div className="complaint-container">
        <h2>Complaint Details</h2>
        <p><strong>Ticket ID:</strong> #{id}</p>
        <p><strong>Product:</strong> {complaint.pname}</p>

        <div className="status-section">
          <label><strong>Status:</strong></label>
          <select 
            value={editedStatus} 
            onChange={handleStatusChange} 
            disabled={!isEditing}
          >
            <option value="Registered">Registered</option>
            <option value="Progress">Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <p><strong>Description:</strong> {complaint.description}</p>

        <div className="button-section">
          {!isEditing && (
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
          )}
          {isEditing && (
            <button className="update-button" onClick={handleUpdateClick}>
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ComplaintDetails;
