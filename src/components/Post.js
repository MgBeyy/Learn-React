export default function Post({ Title, Body }) {
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
      <p>{Body}</p>
    </div>
  );
}
