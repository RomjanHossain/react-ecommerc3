import React from "react";
import "./menu-item.components.scss";

// creating a functional compo [we don't need any state to handle for this xD]

const MenuItem = () => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">Hats</h1>
      <span className="subtitle">buy now</span>
    </div>
  </div>
);

export default MenuItem;
