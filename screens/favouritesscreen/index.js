import React from "react";

import { View, Text, StyleSheet } from "react-native";

const FavouritesScreen = (props) => {
  return (
    <View>
      <Text>Favourites Screen</Text>
    </View>
  );
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouritesScreen;
