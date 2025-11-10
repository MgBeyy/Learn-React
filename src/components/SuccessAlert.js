export default function SuccessAlert({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "rgba(48, 48, 48, 0.5)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <h1
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText("AAAA").catch(() => {});
        }}
        style={{
          textAlign: "center",
          width: "fit-content",
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "white",
          color: "green",
        }}
      >
        Form Submited Successfully
      </h1>
    </div>
  );
}
