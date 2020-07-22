import React from "react";
import "./header.components.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asset/crown.svg";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/Contact">
        Contact
      </Link>
    </div>
  </div>
);
export default Header;
