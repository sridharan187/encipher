function AdminDashboard({ bookings = [], setBookings }) {

  const updateStatus = (index, status) => {
    const updated = [...bookings];
    updated[index] = {
      ...updated[index],
      status,
    };
    setBookings(updated);
  };

  if (bookings.length === 0) {
    return (
      <div className="section">
        <h2>Admin Dashboard</h2>
        <p>No bookings available</p>
      </div>
    );
  }

  return (
    <div className="section">
      <h2>Admin Dashboard</h2>

      <table>
        <thead>
          <tr>
            <th>Hall</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td>{b.hall?.name}</td>
              <td>{b.date}</td>
              <td>{b.start} - {b.end}</td>
              <td>{b.status}</td>
              <td>
                <button onClick={() => updateStatus(i, "Approved")}>
                  Approve
                </button>
                <button onClick={() => updateStatus(i, "Rejected")}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
