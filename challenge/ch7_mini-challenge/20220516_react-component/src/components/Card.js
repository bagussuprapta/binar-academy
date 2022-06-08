import React from "react";
import Header from "./Header";
import Button from "./Button";

const Card = (props) => {
  const { title, description, imgSrc, imgAlt, btnText, btnHref } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <Header title="Card 1" />
      <img src={imgSrc} className="card-img-top" alt={imgAlt}></img>
      <div className="card-body">
        <h2 className="card-body">Gusde</h2>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Card link
        </a>
        <a href="#" class="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default Card;
