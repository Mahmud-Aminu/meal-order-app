import React, { useContext } from "react";
import classes from "./MealCard.module.css";
import { MealItemForm } from "./MealItemForm";
import cartContex from "../../store/cartContex";

const MealsCard = (props) => {
  const cartCtx = useContext(cartContex);
  const mealPrice = props.price.toFixed(2);
  const addAmountHandler = (amount) => {
    cartCtx.onAddItem({
      id: props.id,
      name: props.title,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <div className={classes.parent_container}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={process.env.PUBLIC_URL + props.image} alt="food_image" />
        </div>
        <hr className={classes.separator} />
        <div className={classes.description}>
          <h1>{props.title}</h1>
          <p>${mealPrice}</p>
          <MealItemForm onAddAmount={addAmountHandler} />
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
