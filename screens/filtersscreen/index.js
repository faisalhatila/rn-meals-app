import React, { useState, useEffect, useCallback } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../../components";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, Switch } from "react-native";
import Colors from "../../constants/Colors";
import { setFilters } from "../../store/actions/meals";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);
  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluternFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegeterian: isVegeterian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian, dispatch]);
  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegeterian"
        state={isVegeterian}
        onChange={(newValue) => setIsVegeterian(newValue)}
      />
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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={navigationData.navigation.getParam("save")}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
