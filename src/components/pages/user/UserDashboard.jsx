import { useState, useRef } from "react";
import Navbar from "../../Navbar/index";
import HallCard from "./HallCard";
import BookingForm from "./BookingForm";
import BookingTable from "./BookingTable";
import "../../styles/user.css";
import Hall1 from '../../../image/a3da575cbc424befa353630ef815f619.jpg'
import Hall2 from '../../../image/b688308114095b487d351fd80a7b6142.jpg'
import Hall3 from '../../../image/c1ca7e78fc4e020f3ec497de4073a727.jpg'
import AdminDashboard from "../admin";



const halls = [
  {
    name: "Conference Hall A",
    capacity: 150,
    image: Hall1,
  },
  {
    name: "Conference Hall B",
    capacity: 100,
    image: Hall2,
  },
  {
    name: "Conference Hall C",
    capacity: 50,
    image: Hall3,
  },
];

function UserDashboard() {
  const [theme, setTheme] = useState("light");
  const [selectedHall, setSelectedHall] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [role, setRole] = useState("user");
  
  const homeRef = useRef(null);
  const formRef = useRef(null);
  const tableRef = useRef(null);

 
  const scrollTo = (section) => {
    if (section === "home") homeRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "form") formRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "dashboard") tableRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const addBooking = (data) => {
    setBookings([...bookings, data]);
    setSelectedHall(null);

   
    setTimeout(() => {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };



  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} scrollTo={scrollTo} />

      
      <div ref={homeRef} className="section">
        <h2> Conference Halls</h2>
        <div className="hall-grid">
          {halls.map((hall) => (
            <HallCard
              key={hall.name}
              hall={hall}
              onSelect={(hall) => {
                setSelectedHall(hall);
                setTimeout(() => {
                  formRef.current.scrollIntoView({ behavior: "smooth" });
                }, 200);
              }}
            />
          ))}
        </div>
      </div>

      <div ref={formRef} className="section">
        {selectedHall && (
          <BookingForm hall={selectedHall} onSubmit={addBooking} />
        )}
      </div>

     
      <div ref={tableRef} className="section">
        {bookings.length > 0 && <BookingTable bookings={bookings} />}
      </div>
    </div>
  );
}

export default UserDashboard;
