import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Meals App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
