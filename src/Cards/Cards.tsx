import React from "react";
import CardProps from "./Card.type";
import "./Card.css"

const Cards = ({title, body, footer, buttonLabel, buttonAction}:CardProps) => {
  return(
      <div className="card">
        <p className="card-title">Card2</p>
        <p className="card-title">{title}</p>
        <p className="card-body">{body}</p>
          {
              footer &&
              <div className="card-footer">{footer}</div>
          }
          {
              buttonLabel &&
              <button className="card-button" onClick={buttonAction}>{buttonLabel}</button>
          }

      </div>

  )
}

export default Cards;