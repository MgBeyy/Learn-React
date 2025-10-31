import TagButton from "./TagButton";

export default function SideMenu() {
  return (
    <div style={{ margin: "25px", border: "solid teal 5px" }}>
      <TagButton>
        <h1 style={{ backgroundColor: "green" }}>Tag Button</h1>
      </TagButton>
      <TagButton>
        <h3>Kızıl Elma</h3>
        <img
          src="https://www.yozgatgazetesi.com/upload/2023/04/1681852206.jpg"
          alt="Kızıl Elma"
          style={{ maxWidth: "100%" }}
        ></img>
      </TagButton>
    </div>
  );
}
