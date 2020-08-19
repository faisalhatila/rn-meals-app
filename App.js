import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { MealsNavigator } from "./navigation";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducer/meals";
import { Provider } from "react-redux";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

enableScreens();
const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
