import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60%", display: "flex" }}>
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
