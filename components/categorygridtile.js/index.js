import React from "react";

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = () => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id,
          },
        });
      }}
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryGridTile;
