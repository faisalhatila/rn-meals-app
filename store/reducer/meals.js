import { TOGGLE_FAVOURITE } from "../actions/meals";

const { MEALS } = require("../../../data/dummy-data");

const initialState = {
  meals: MEALS,
  filteredMealsL: MEALS,
  favourtieMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favourtieMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favourtieMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favourtieMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favourtieMeals: state.favourtieMeals.concat(meal) };
      }
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
