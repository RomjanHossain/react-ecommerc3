import React from "react";
import "./menu-item.components.scss";
import { withRouter } from "react-router-dom";

// creating a functional compo [we don't need any state to handle for this xD]

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={` menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
