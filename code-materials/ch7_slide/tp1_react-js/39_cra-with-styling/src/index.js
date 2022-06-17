import React from "react";
import ReactDOM from "react-dom/client";
import Module from "./Module";
import Styled from "./Styled";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main>
      <h1>Hello World</h1>
    </main>

    <Module />

    <Styled />
  </React.StrictMode>
);
