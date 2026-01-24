import React, { useState } from "react";

function Text() {

  const [text, setText] = useState("");

  return (
    <>
      <h2>Controlled Input Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </>
  );
}

export default Text;
