import { useLocation, useParams } from "react-router-dom";
import './ComplaintStatus.css';
function ComplaintStatus() {
    const { id } = useParams();
    const { state: ticket } = useLocation();

    return (
        <div>
            <h1>Complaint Details</h1>
            {/* <p><strong>Ticket ID:</strong> #{id}</p>
            <p><strong>Product:</strong> {ticket.product}</p>
            <p><strong>Description:</strong> {ticket.description}</p>
            <p><strong>Purchase Date:</strong> {ticket.purchaseDate}</p>
            <p><strong>Status:</strong> {ticket.warrantyStatus}</p>
            <p><strong>Service Cost:</strong> ₹{ticket.serviceCost}</p> */}
        </div>
    );
}

export default ComplaintStatus;
