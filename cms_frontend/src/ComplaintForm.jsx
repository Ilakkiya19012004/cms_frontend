import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ComplaintForm() {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [photo, setPhoto] = useState(null);
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const purchase = new Date(purchaseDate);
  const now = new Date();
  const diffYears = (now - purchase) / (1000 * 60 * 60 * 24 * 365);

  const warrantyStatus = diffYears <= 1 ? "In Warranty" : "Out of Warranty";
  const serviceCost = diffYears <= 1 ? 0 : 499;
    const newTicket = {
      id: Math.floor(Math.random() * 1000000),
      product,
      description,
      purchaseDate,
      warrantyStatus,
      serviceCost,
    };
    setTicket(newTicket);
    console.log("Ticket submitted:", newTicket);
    navigate(`/ticket/${newTicket.id}`, { state: newTicket });

  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow-xl bg-white">
      <h1 className="text-2xl font-bold mb-4">Submit a Complaint</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Select Product</label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">-- Select Product --</option>
            <option value="LG TV">LG TV</option>
            <option value="LG AC">LG AC</option>
            <option value="LG Washing Machine">LG Washing Machine</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Issue Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Purchase Date</label>
          <input
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Upload Photo (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default ComplaintForm;
