import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItems";

const Cart = (props) => {
  return (
    <Modal onClick={props.onCloseCart}>
      <CartItem />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>254</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt "]} onClick={props.onCloseCart}>
          Close
        </button>
        {/* {hasItems && <button className={classes.button}>Order</button>} */}
      </div>
    </Modal>
  );
};

export default Cart;
