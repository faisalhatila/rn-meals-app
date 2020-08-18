import React from "react";
import MealList from "../../components/meallist";
import { MEALS } from "../../data/dummy-data";
const FavouritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites",
};

export default FavouritesScreen;
