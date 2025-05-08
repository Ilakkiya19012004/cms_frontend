import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintForm from "./User/ComplaintForm.jsx";
import TicketPage from "./User/TicketPage.jsx";
import ULogin from "./ULogin";
import Register from "./User/Register.jsx";
import UDashboard from "./User/UDashboard.jsx";
import Feedback from "./User/Feedback.jsx";
import ComplaintStatus from "./User/ComplaintStatus.jsx";
import ADashboard from "./Admin/ADashboard.jsx";
import AllComplaints from "./Admin/AllComplaints.jsx";
import NewComplaints from "./Admin/NewComplaints.jsx";
import OngoingComplaints from "./Admin/OngoingComplaints.jsx";
import Performance from "./Admin/Performance.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ULogin />} />
        <Route path="/udashboard" element={<UDashboard />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/complaintStatus" element={<ComplaintStatus />} />
        <Route path="/ticket/:id" element={<TicketPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/aDashboard" element={<ADashboard />} />
        <Route path="/all-complaints" element={<AllComplaints />} />
        <Route path="/new-complaints" element={<NewComplaints />} />
        <Route path="/ongoing-complaints" element={<OngoingComplaints />} />
        <Route path="/performance" element={<Performance />} />
        {/* <Route path="/complaint-details/:id" element={<ComplaintDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
