import React from "react";
import MealsCard from "./MealCard";
import classes from "./Meal.module.css";
import mealItems from "../Asset/mealItems";

const Meals = () => {
  return (
    <div className={classes.parent}>
      {mealItems.map((item) => (
        <MealsCard
          key={item.id}
          id={item.id}
          title={item.name}
          image={item.img}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Meals;
