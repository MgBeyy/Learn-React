import { useState } from "react";

export default function Post({ Title, Body }) {
  const [newBody, setBody] = useState(Body);
  function changeBody() {
    if (newBody === Body) setBody("new Body");
    else setBody(Body);
  }
  const [input, setInput] = useState("");
  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div
      style={{
        padding: "10px",
        margin: "25px",
        border: "5px solid teal",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <h2>{Title}</h2>
      <hr />
      <p>{newBody}</p>
      <button style={{ margin: 10 }} onClick={changeBody}>
        Click Me!
      </button>
      <input value={input} onChange={handleInput} />
    </div>
  );
}
