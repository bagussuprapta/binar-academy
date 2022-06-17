import React from 'react';
import ReactDOM from 'react-dom/client';
import MainLayout from "./layouts/MainLayout";
import Button from "./components/Button";

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(Button);

root.render(
  <React.StrictMode>
    <MainLayout>
      <Button variant="primary">
        Click
      </Button>

      <Button variant="secondary">
        Click
      </Button>

      <Button variant="black">
        Click
      </Button>
    </MainLayout>
  </React.StrictMode>
);
