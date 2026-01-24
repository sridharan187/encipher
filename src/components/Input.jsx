import React, { useState } from "react";

function Input() {

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();

    if (username.trim() === "") {
      setError("Username is required");
    } else {
      setError("");
      alert("Form Submitted");
    }
  }

  return (
    <>
      <h2>Username Form</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red"  }}>{error}</p>}
    </>
  );
}

export default Input;
