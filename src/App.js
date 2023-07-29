import { useEffect, useState } from "react";
import Appheader from "./Appheader";
import Bloglist from "./Bloglist";
import Button from "./components/Button";
import Home from "./components/Home";

function App() {
  const [x, setX] = useState(10);

  function updateState() {
    setX(x + 5);
  }
  console.log(x);

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  function renderItems() {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <h3>{item.name} </h3>
          <p>Price: {item.price}</p>
        </div>
      );
    });
  }
  const carse = "MERN30DAYS";
  const [blogdata, change] = useState([
    { id: "1", title: "angul", description: "this is for ang", author: "john" },
    {
      id: "2",
      title: "React",
      description: "this is for React",
      author: "harr",
    },
    {
      id: "3",
      title: "dotnet",
      description: "this is for dot",
      author: "john",
    },
    {
      id: "4",
      title: "jequery",
      description: "this is for jeq",
      author: "harr",
    },
    { id: "5", title: "pyth", description: "this is for pyht", author: "john" },
  ]);

  return (
    <main>
      <h1>Example Webshiop !!!!</h1>
      {renderItems()}
      <Appheader title="Hello Shahzad" course={carse} />
      <Bloglist
        blog={blogdata.filter((item) => item.author == "harr")}
        author="Aithor is harr"
      />
      <Bloglist
        blog={blogdata.filter((item) => item.author == "john")}
        author="Aithor is john"
      />
      <h1>Reusable Button Component</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Button>Success Button</Button>
        <Button>Danger Button</Button>
        <Button>Warning Button</Button>
      </div>
      <h1>State {x}</h1>
      <div>
        <button onClick={updateState}>CLick Me</button>
      </div>
      <Home></Home>
    </main>
  );
}

export default App;
