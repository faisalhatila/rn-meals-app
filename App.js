import React from "react";

import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Meals App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
