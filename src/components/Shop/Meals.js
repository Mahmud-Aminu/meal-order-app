import React from "react";
import MealsCard from "./MealCard";
import classes from "./Meal.module.css";
import mealItems from "../Asset/mealItems";

const Meals = () => {
  return (
    <div className={classes.parent}>
      {mealItems.map((item) => (
        <MealsCard
          id={item.id}
          title={item.title}
          image={item.img}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Meals;
