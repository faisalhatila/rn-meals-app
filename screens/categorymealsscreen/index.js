import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import Colors from "../../constants/Colors";
import { CATEGORIES } from "../../data/dummy-data";
const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    // headerStyle: {
    //   backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    // },
    // headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
