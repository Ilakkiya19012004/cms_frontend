import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintForm from "./User/ComplaintForm.jsx";
import TicketPage from "./User/TicketPage.jsx";
import ULogin from "./ULogin";
import Home from "./Home.jsx";
import Register from "./User/Register.jsx";
import UDashboard from "./User/UDashboard.jsx";
import Feedback from "./User/Feedback.jsx";
import ComplaintStatus from "./User/ComplaintStatus.jsx";
import ADashboard from "./Admin/ADashboard.jsx";
import AllComplaints from "./Admin/AllComplaints.jsx";
import NewComplaints from "./Admin/NewComplaints.jsx";
import OngoingComplaints from "./Admin/OngoingComplaints.jsx";
import Performance from "./Admin/Performance.jsx";
import ComplaintDetails from "./Admin/ComplaintDetails.jsx";
import UserNavbar from "./User/UserNavbar.jsx";
import AdminNavbar from "./Admin/AdminNavbar.jsx";
import { useState } from "react";
import image1 from './assets/image4.png';

function App() {
  // Simulate the user role (for demonstration purposes)
  const [userRole, setUserRole] = useState("USER"); // Set to 'admin' for admin view

  return (
    <Router>
      <div style={{backgroundImage: `url(${image1})`,
      backgroundRepeat: 'repeat', // or 'no-repeat' if you want only one image
    backgroundSize: 'cover',    // use 'auto' or 'contain' for pattern-style
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100vw',
    }}>
        {/* Conditionally render navbar based on user role */}
        {userRole === "admin" ? <AdminNavbar /> : <UserNavbar />}

        <Routes>
          {/* User Routes */}
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/" element={<ULogin />} />
          <Route path="/udashboard" element={<UDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/complaint" element={<ComplaintForm />} />
          <Route path="/complaintStatus" element={<ComplaintStatus />} />
          <Route path="/ticket/:id" element={<TicketPage />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* Admin Routes */}
          <Route path="/aDashboard" element={<ADashboard />} />
          <Route path="/all-complaints" element={<AllComplaints />} />
          <Route path="/new-complaints" element={<NewComplaints />} />
          <Route path="/ongoing-complaints" element={<OngoingComplaints />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/complaint-details/:id" element={<ComplaintDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
