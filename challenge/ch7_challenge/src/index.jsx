import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './index.css';
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Introduction
      srcImage="assets/image/img_car.png"
    />
  </React.StrictMode>
);
