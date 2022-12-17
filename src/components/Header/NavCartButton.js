import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./NavCartButton.module.css";
const NavCartButton = (props) => {
  return (
    <div className={classes.div} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>25</span>
    </div>
  );
};

export default NavCartButton;
