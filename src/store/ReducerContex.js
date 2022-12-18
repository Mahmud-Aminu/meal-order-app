import React, { useReducer } from "react";
import Context from "./AppContex";

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

const defaultCartItems = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (action, type) => {};

const ContextProvider = (props) => {
  const [cartState, dispached] = useReducer(cartReducer, defaultCartItems);

  const addItemHandle = (item) => {
    dispached({ type: ACTIONS.ADD, payload: item });
  };

  const removeItemHandle = (id) => {
    dispached({ type: ACTIONS.REMOVE, payload: id });
  };

  const contexValue = {
    items: cartState,
    totalAmount: cartState.amount,
    onAdd: addItemHandle,
    onRemove: removeItemHandle,
  };

  return (
    <Context.Provider value={contexValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
