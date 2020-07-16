// importing react
import React from "react";
// importing my own files
import "./homepage.style.scss";
import MenuItem from "../../components/menu-item/menu-item.components";

const Homepage = () => (
  <div className="homepaeg">
    <div className="directory-menu">
      <MenuItem />>{/* 2nd */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">buy now</span>
        </div>
      </div>
      {/* 3rd */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">buy now</span>
        </div>
      </div>
      {/* 4th */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Woman</h1>
          <span className="subtitle">buy now</span>
        </div>
      </div>
      {/* 5th */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Man</h1>
          <span className="subtitle">buy now</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
