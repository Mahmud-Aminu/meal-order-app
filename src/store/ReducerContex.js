import React, { useReducer } from "react";
import Context from "./cartContex";

const defaultCartItems = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "add") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartItems;
};

const ContextProvider = (props) => {
  const [cartState, dispached] = useReducer(cartReducer, defaultCartItems);

  const addItemHandle = (item) => {
    dispached({ type: "add", item: item });
  };

  const removeItemHandle = (id) => {
    dispached({ type: "remove", id: id });
  };

  const contexValue = {
    items: cartState.items,
    totalAmount: cartState.amount,
    onAddItem: addItemHandle,
    onRemoveItem: removeItemHandle,
  };

  return (
    <Context.Provider value={contexValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
