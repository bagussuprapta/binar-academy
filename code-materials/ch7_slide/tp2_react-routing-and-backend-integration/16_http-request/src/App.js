import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const id = getRandomInt(1, 100);

function App() {
  // https://jsonplaceholder.typicode.com/todos/:id
  const [todo, setTodo] = useState(null);
  const style = { textDecoration: todo?.completed ? "line-through" : "unset" };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!!todo ? (
          <div>
            <h1 style={style}>{todo.title}</h1>
          </div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
