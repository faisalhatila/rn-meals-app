import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Colors from "../../constants/Colors";
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from "../../screens/index";
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
