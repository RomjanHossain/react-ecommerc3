import React from "react";
import "./menu-item.components.scss";

// creating a functional compo [we don't need any state to handle for this xD]

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">buy now</span>
    </div>
  </div>
);

export default MenuItem;
