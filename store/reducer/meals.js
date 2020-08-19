const { MEALS } = require("../../../data/dummy-data");

const initialState = {
  meals: MEALS,
  filteredMealsL: MEALS,
  favourtieMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
