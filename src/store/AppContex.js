import React from "react";

const Context = React.createContext({
  items: [],
  totalAmount: 0,
  onAdd: (item) => {},
  onRemove: (id) => {},
});

export default Context;
