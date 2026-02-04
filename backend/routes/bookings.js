const express = require("express");
const router = express.Router();
const db = require("../db");


router.post("/", (req, res) => {
  const { hallName, date, start, end } = req.body;

  const sql =
    "INSERT INTO bookings (hall_name, date, start_time, end_time) VALUES (?, ?, ?, ?)";

  db.query(sql, [hallName, date, start, end], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Booking created successfully" });
  });
});


router.get("/", (req, res) => {
  db.query("SELECT * FROM bookings", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});


router.put("/:id", (req, res) => {
  const { status } = req.body;

  db.query(
    "UPDATE bookings SET status=? WHERE id=?",
    [status, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Status updated" });
    }
  );
});

module.exports = router;
