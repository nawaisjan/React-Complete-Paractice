import React from "react";
import prfile from "./assets/profile.jpg";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={prfile} alt="profile picture"></img>
      <h2 className="card-title">{props.name}</h2>
      <p className="card-text">{props.description}</p>
    </div>
  );
};

export default Card;
