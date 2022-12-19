import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./NavCartButton.module.css";
import Context from "../../store/cartContex";
const NavCartButton = (props) => {
  const cartCtx = useContext(Context);
  const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <div className={classes.div} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </div>
  );
};

export default NavCartButton;
