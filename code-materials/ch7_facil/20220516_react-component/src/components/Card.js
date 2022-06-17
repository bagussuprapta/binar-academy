import React from "react";
import Header from './Header'
import Button from "./Button";

const Card = (props) => {
  const { title, description, imgSrc, imgAlt, btnText, btnHref } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <Header title="Card 1" />
      <img src={imgSrc} className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Button variant="primary">{btnText}</Button>
      </div>
    </div>
  )
}

export default Card;
