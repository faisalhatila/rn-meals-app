import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from "../screens";
const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
