import React from "react";

import { View, Text, StyleSheet } from "react-native";

const FiltersScreen = (props) => {
  return (
    <View>
      <Text>Filters Screen</Text>
    </View>
  );
};
FiltersScreen.navigateOptions = {
  headerTitle: "Filter Meal",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
