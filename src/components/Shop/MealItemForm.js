import React, { useState } from "react";
import Counter from "../UI/Counter";
import classes from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
  // const amountRef = useRef();
  const [count, setCount] = useState(1);
  // const amountRef = useRef();

  const increament = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decreament = (e) => {
    e.preventDefault();
    if (count > 1) setCount(count - 1);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const amount = count;
    props.onAddAmount(amount);
  };
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {/* <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_id",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      /> */}
      <Counter count={count} onIncrease={increament} onDecrease={decreament} />
      <button className={classes.formBtn}>Add to cart</button>
    </form>
  );
};
