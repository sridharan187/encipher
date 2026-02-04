import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/pages/login/index'
import User from './components/pages/user/UserDashboard'
import Admin from './components/pages/admin/index'

import Navbar from "./components/Navbar";
import BookHall from "./components/pages/user/HallCard";
import MyBookings from "./components/pages/user/BookingForm";

function App() {
  const role = localStorage.getItem("role");
  

  return (
    <>  
    
     <Routes>
     
      <Route path="/" element={<Login />} />

      <Route
        path="/user"
        element={role === "USER" ? <User /> : <Navigate to="/" />}
      />

      <Route
        path="/admin"
        element={role === "ADMIN" ? <Admin /> : <Navigate to="/" />}
      />

      <Route path="/book" element={<BookHall/>}
      />

      <Route path="/my-booking" element={<MyBookings/>} />

     
      

    </Routes>

    </>
   
    
  );
}

export default App;
