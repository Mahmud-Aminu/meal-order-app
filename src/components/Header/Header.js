import React, { useState } from "react";
import Navigation from "./Navigation";
import Cart from "../Cart/Cart";

export default function Header(props) {
  const [showCart, setShowCart] = useState(null);

  const onShownCart = () => {
    setShowCart(true);
  };
  const onCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Navigation onShownCart={onShownCart} />
      {showCart && <Cart onCloseCart={onCloseCart} />}
    </div>
  );
}
