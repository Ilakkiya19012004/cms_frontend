import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ComplaintForm1.css'; // Reuse the same styling
import UserNavbar from "./UserNavbar";

function ComplaintForm2() {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [photo, setPhoto] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

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
      model,
      description,
      purchaseDate,
      warrantyStatus,
      serviceCost,
      address,
      phone,
      photo,
    };

    console.log("Home Service Ticket submitted:", newTicket);
    navigate(`/ticket/${newTicket.id}`, { state: newTicket });
  };

  return (
    <>
      <UserNavbar />
      <div className="complaint-form-container">
        <h1 className="form-title">Submit a Home Service Complaint</h1>
        <form onSubmit={handleSubmit} className="form">

          <div className="form-group">
            <label className="form-label">Select Product</label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="form-input"
              required
            >
              <option value="">-- Select Product --</option>
              <option value="LG TV">LG TV</option>
              <option value="LG AC">LG AC</option>
              <option value="LG Washing Machine">LG Washing Machine</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Model No.</label>
            <textarea
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="form-input"
              rows="1"
              placeholder="Enter Model No."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Issue Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input"
              rows="4"
              placeholder="Describe the issue you're facing..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Purchase Date</label>
            <input
              type="date"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input"
              rows="3"
              placeholder="Enter your address for home service"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="Enter your phone number"
              required
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Upload Photo (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="form-input"
            />
          </div>

          <button type="submit" className="form-submit-btn">
            Submit Complaint
          </button>
        </form>
      </div>
    </>
  );
}

export default ComplaintForm2;
