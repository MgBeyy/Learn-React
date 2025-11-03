import TagButton from "./TagButton";

const buttons = [
  {
    key: 1,
    tags: (
      <div>
        <h1 style={{ backgroundColor: "green" }}>Tag Button</h1>
      </div>
    ),
  },
  {
    key: 2,
    tags: (
      <div>
        <h3>Kızıl Elma</h3>
        <img
          src="https://www.yozgatgazetesi.com/upload/2023/04/1681852206.jpg"
          alt="Kızıl Elma"
          style={{ maxWidth: "100%" }}
        ></img>
      </div>
    ),
  },
];
const buttonsList = buttons.map((button) => (
  <TagButton key={button.key}>{button.tags}</TagButton>
));

export default function SideMenu() {
  return (
    <div style={{ margin: "25px", border: "solid teal 5px" }}>
      {buttonsList}
    </div>
  );
}
