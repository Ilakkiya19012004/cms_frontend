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
  const [remarks, setRemarks] = useState("");
  const [cost, setCost] = useState("");

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    setStatus(editedStatus);
    setIsEditing(false);

    // Optional: Send updated data to backend
    // fetch(`/api/complaints/${id}/status`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     status: editedStatus,
    //     remarks: remarks,
    //     cost: cost
    //   })
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

        {/* Show input fields only in edit mode */}
        {isEditing && (
          <>
            <div className="form-group">
              <label><strong>Complaint Resolved Remarks:</strong></label>
              <textarea 
                rows="3"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter resolution details"
              />
            </div>

            <div className="form-group">
              <label><strong>Cost (if any):</strong></label>
              <input 
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder="Enter cost incurred"
              />
            </div>
          </>
        )}

        {/* Show submitted remarks and cost after update */}
        {!isEditing && remarks && (
          <p><strong>Remarks:</strong> {remarks}</p>
        )}
        {!isEditing && cost && (
          <p><strong>Cost:</strong> ₹{cost}</p>
        )}

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
