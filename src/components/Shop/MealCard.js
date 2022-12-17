import React from "react";
import classes from "./MealCard.module.css";
import { MealItemForm } from "./MealItemForm";

const MealsCard = ({ image, title, price }) => {
  return (
    <div className={classes.parent_container}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={process.env.PUBLIC_URL + image} alt="food_image" />
        </div>
        <hr className={classes.separator} />
        <div className={classes.description}>
          <h1>{title}</h1>
          <p>${price}</p>
          <MealItemForm />
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
