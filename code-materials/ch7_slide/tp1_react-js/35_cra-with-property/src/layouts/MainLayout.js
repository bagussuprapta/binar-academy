import React from 'react';
import style from "./MainLayout.module.css"

const MainLayout = ({ children }) => (
  <main className={style.MainLayout}>
    {children}
  </main>
)

export default MainLayout;
