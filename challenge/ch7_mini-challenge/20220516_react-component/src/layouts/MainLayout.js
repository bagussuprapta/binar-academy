import React from 'react';
import style from "./Main.layout.css"

const MainLayout = ({ children }) => (
  <main className={style.MainLayout}>
    {children}
  </main>
)

export default MainLayout;
