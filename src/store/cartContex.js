import React from "react";

const Context = React.createContext({
  items: [],
  totalAmount: 0,
  onAddItem: (items) => {},
  onRemoveItem: (id) => {},
});

export default Context;
