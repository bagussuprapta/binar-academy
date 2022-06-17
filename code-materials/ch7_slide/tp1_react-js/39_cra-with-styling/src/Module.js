import React from "react";
import style from "./Module.module.css";

const Module = () => (
  <div className={style.Module}>
    <h1 className={style["Module-title"]}>Hello World</h1>
    <p className={style["Module-description"]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, est
      in vehicula scelerisque, dui diam consectetur mauris, non sodales velit
      quam vitae felis. Sed iaculis porta luctus. Suspendisse vitae leo gravida,
      euismod urna nec, consectetur lorem. Donec vel auctor eros, id molestie
      elit. Duis ipsum massa, cursus ut euismod a, rhoncus in massa. Aenean ac
      dapibus leo, ac sollicitudin arcu. Praesent feugiat viverra metus, vel
      efficitur libero rutrum ac. Fusce nec velit dapibus, volutpat dui egestas,
      aliquet dolor. Ut a consequat tellus, non interdum lectus. Ut vestibulum
      malesuada eros in faucibus. In venenatis, neque eget malesuada efficitur,
      ligula tortor consequat nulla, vel vulputate ipsum ex ut velit. Phasellus
      in nulla suscipit, laoreet tortor ac, ultrices mauris.
    </p>
  </div>
);

export default Module;
