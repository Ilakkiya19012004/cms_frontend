import { useLocation, useParams } from "react-router-dom";

function TicketPage() {
  const { id } = useParams();
  const { state: ticket } = useLocation();

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4">Complaint Submitted Successfully</h2>
      <p><strong>Ticket ID:</strong> #{id}</p>
      <p><strong>Product:</strong> {ticket.product}</p>
      <p><strong>Description:</strong> {ticket.description}</p>
      <p><strong>Purchase Date:</strong> {ticket.purchaseDate}</p>
      <p><strong>Status:</strong> {ticket.warrantyStatus}</p>
      <p><strong>Service Cost:</strong> ₹{ticket.serviceCost}</p>
      <p>For more details view Complaint Status</p>
    </div>
  );
}

export default TicketPage;
