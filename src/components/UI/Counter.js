import React from "react";
import classes from "./Counter.module.css";

const Counter = (props) => {
  return (
    <div className={classes.counter}>
      <button className={classes.btn} onClick={props.onDecrease}>
        -
      </button>
      <p>{props.count}</p>
      <button className={classes.btn} onClick={props.onIncrease}>
        +
      </button>
    </div>
  );
};

export default Counter;
