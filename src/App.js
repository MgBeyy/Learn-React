import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";

function App() {
  const posts = [
    {
      key: 1,
      Title: `Test 1`,
      Body: `Body 1`,
    },
    {
      key: 2,
      Title: `Test 2`,
      Body: `Body 2`,
    },
    {
      key: 3,
      Title: `Test 3`,
      Body: `Body 3`,
    },
    {
      key: 4,
      Title: `Test 4`,
      Body: `Body 4`,
    },
  ];
  const postsList = posts.map((post) => (
    <Post key={post.key} Title={post.Title} Body={post.Body} />
  ));
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60%", display: "flex" }}>
          <div style={{ width: "70%" }}>{postsList} </div>
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
