import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";

function App() {
  const post1 = {
    Title: `Test 1`,
    Body: `Body 1`,
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60%", display: "flex" }}>
          <div style={{ width: "70%" }}>
            <Post Title={post1.Title} Body={post1.Body} />
            <Post Title={"Test 2"} Body={"Body 2"} />
            <Post Title={"Test 3"} Body={"Body 3"} />
            <Post Title={"Test 4"} Body={"Body 4"} />
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
