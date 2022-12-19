import React, { useContext } from "react";
import Context from "../../store/cartContex";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(Context);

  const addCartItemHandler = (items) => {
    cartCtx.onAddItem({ ...items, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartCtx.onRemoveItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAddItem={addCartItemHandler.bind(null, item)}
          onRemoveItem={removeCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
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
