import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintForm from "./ComplaintForm";
import TicketPage from "./TicketPage";
import ULogin from "./ULogin";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ULogin />} />
      <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/ticket/:id" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
