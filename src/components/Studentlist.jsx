import React from "react";

function Studentlist() {

  const students = [
    { id: 1, name: "Sridharan" },
    { id: 2, name: "Godwin" },
    { id: 3, name: "Kaka" },
    { id: 4, name: "Ajith Kumar" }
  ];

  return (
    <>
      <h2>Student List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Studentlist;
