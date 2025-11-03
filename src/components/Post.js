import { useState } from "react";

export default function Post({ Title, Body }) {
  const [newBody, setBody] = useState(Body);
  function changeBody() {
    if (newBody === Body) setBody("new Body");
    else setBody(Body);
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
      <button onClick={changeBody}>Click Me!</button>
    </div>
  );
}
