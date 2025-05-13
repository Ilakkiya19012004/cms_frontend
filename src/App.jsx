import { Routes, Route, useLocation } from "react-router-dom";
import ComplaintForm1 from "./User/ComplaintForm1.jsx";
import ComplaintForm2 from "./User/ComplaintForm2.jsx";
import TicketPage from "./User/TicketPage.jsx";
import Login from "./Login";
import HomePage from "./HomePage.jsx";
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
import { useState } from "react";
import image from './assets/image4.png';
import PasswordReset from "./User/PasswordReset.jsx";
import ServiceType from "./User/ServiceType.jsx";

function App() {
  const [userRole] = useState("USER");
  const location = useLocation();

  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      height: '100vh',
      width: '100vw',
    }}>
{/*    
      {!["/","/login", "/register", "/forgot-password"].includes(location.pathname) && (
  <>
    <AdminNavbar />
    <UserNavbar />
  </>
)}   */}
    
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<PasswordReset />}/>
        <Route path="/udashboard" element={<UDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service-type" element={<ServiceType />} />
        <Route path="/complaint1" element={<ComplaintForm1 />} />
        <Route path="/complaint2" element={<ComplaintForm2 />} />
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
  );
}

export default App;
