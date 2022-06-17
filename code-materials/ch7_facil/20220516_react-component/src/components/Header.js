import React from "react";

const Header = (props) => {
  const { title } = props;

  return (
    <div className="header" style={{ width: "18rem" }}>
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
      </div>
    </div>
  )
}

export default Header;
