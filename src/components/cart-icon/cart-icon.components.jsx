import React from "react";
import "./cart-icon.components.scss";

import { ReactComponent as ShoppingIcon } from "../../asset/ShoppingBag.svg";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
