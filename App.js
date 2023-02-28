import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CarNumber from "./Components/CarNumber";
import Gas from "./Components/Gas";
import AddAcc from "./Components/AddAcc";

const App = () => {
  return (
    <View style={Styles.container}>
      <View>
        <CarNumber />
      </View>
      <View>
        <Gas />
      </View>
      <View>
        <AddAcc />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
