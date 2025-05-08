import { useLocation, useParams, Link } from "react-router-dom";
import './TicketPage.css';

function TicketPage() {
  const { id } = useParams();
  const { state: ticket } = useLocation();

  return (
    <div className="ticket-container">
      <h2>Complaint Submitted Successfully</h2>
      <p><strong>Ticket ID:</strong> #{id}</p>
      <p><strong>Product:</strong> {ticket.product}</p>
      <p><strong>Description:</strong> {ticket.description}</p>
      <p><strong>Purchase Date:</strong> {ticket.purchaseDate}</p>
      <p><strong>Status:</strong> {ticket.warrantyStatus}</p>
      <p><strong>Service Cost:</strong> ₹{ticket.serviceCost}</p>
      <p>
        For more details, view&nbsp;
        <Link to="/complaintStatus" className="ticket-link">
          Complaint Status
        </Link>
      </p>
    </div>
  );
}

export default TicketPage;
