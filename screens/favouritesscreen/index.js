import React from "react";
import MealList from "../../components/meallist";
// import { MEALS } from "../../data/dummy-data";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../../components";
const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourites",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

export default FavouritesScreen;
