import React from "react";
import "./cart-dropdown.components.scss";
import CustomButton from "../customBtn/customBtn.components";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>add to Cart</CustomButton>
  </div>
);

export default CartDropDown;
