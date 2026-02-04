function BookingTable({ bookings }) {
  return (
    <div className="table-box">
      <h3>My Bookings</h3>

      <table>
        <thead>
          <tr>
            <th>Hall</th>
            <th>Date</th>
            <th>Time</th>
            <th>Purpose</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.hall}</td>
              <td>{b.date}</td>
              <td>{b.start} - {b.end}</td>
              <td>{b.purpose}</td>
              <td>
                <span className={`status ${b.status.toLowerCase()}`}>
                  {b.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
