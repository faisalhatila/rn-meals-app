import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../../components";

import { View, Text, StyleSheet } from "react-native";

const FiltersScreen = (props) => {
  return (
    <View>
      <Text>Filters Screen</Text>
    </View>
  );
};
FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meal",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
