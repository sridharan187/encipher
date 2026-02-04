const express = require("express");
const cors = require("cors");
require("./db");

const bookingRoutes = require("./routes/bookings");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Server is running.....");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
