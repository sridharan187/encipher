import { useState } from "react";

function BookingForm({ hall, onSubmit }) {
  const [form, setForm] = useState({
    date: "",
    start: "",
    end: "",
    purpose: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const role = localStorage.getItem("role");

    
    if (role !== "USER") {
      alert("Only users can book halls");
      return;
    }

    
    if (Object.values(form).includes("")) {
      alert("Please fill all fields");
      return;
    }

   
    if (form.date < today) {
      alert("You cannot book a past date ");
      return;
    }

   
    if (form.end <= form.start) {
      alert("End time must be after start time");
      return;
    }

    
    onSubmit({
      id: Date.now(),
      hall: hall.name,
      ...form,
      status: "Pending",
    });

    alert("Booking submitted successfully ");

    
    setForm({
      date: "",
      start: "",
      end: "",
      purpose: "",
    });
  };

  return (
    <div className="head-form">
      <div className="booking-form">
        <h3>Book {hall.name}</h3>

        <input
          type="date"
          name="date"
          min={today}
          value={form.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="start"
          value={form.start}
          onChange={handleChange}
        />

        <input
          type="time"
          name="end"
          value={form.end}
          onChange={handleChange}
        />

        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={form.purpose}
          onChange={handleChange}
        />

        <button onClick={submit}>Submit Booking</button>
      </div>
    </div>
  );
}

export default BookingForm;
