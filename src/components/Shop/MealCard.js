import React from "react";
import Button from "../UI/Button";
import classes from "./MealCard.module.css";

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
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
