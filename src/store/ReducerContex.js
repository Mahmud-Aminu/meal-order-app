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
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "remove") {
    const existingCartItemIndex = state.items.findIndex(
      // if the item in the cart has the same id
      (item) => item.id === action.id
    );
    // if its true then the items will be inside the cart
    const existingItem = state.items[existingCartItemIndex];
    // this will remove one item from the multiple item
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    // if an item is only one inside the cart will be remove
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // if multiple item will remove only one
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
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
