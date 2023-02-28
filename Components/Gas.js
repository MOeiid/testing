import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Gas = () => {
  return (
    <View style={Styles.Car_Gas}>
      <View>
        <View style={Styles.Gas}>
          <Text style={Styles.text_1}>GASOLINE 95</Text>
          <Text style={Styles.text}>12 CARS</Text>
        </View>
        <View style={Styles.Gas}>
          <Text style={Styles.text_1}>GASOLINE 92</Text>
          <Text style={Styles.text}>12 CARS</Text>
        </View>
        <View style={Styles.Gas}>
          <Text style={Styles.text_1}>GASOLINE 80</Text>
          <Text style={Styles.text}>12 CARS</Text>
        </View>
        <View style={Styles.Gas}>
          <Text style={Styles.text_1}>SOLAR</Text>
          <Text style={Styles.text}>12 CARS</Text>
        </View>
        <View style={Styles.Gas}>
          <Text style={Styles.text_1}>GAS</Text>
          <Text style={Styles.text}>12 CARS</Text>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  Car_Gas: {
    flexDirection: "row",
    // width: 510,
  },
  Gas: {
    width: 94,
    height: 56,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B6B7B7",
    margin: 10,
  },
  text_1: {
    fontSize: 11,
    marginTop: 3,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 11,
    marginTop: 3,
    color: "#CE3327",
  },
});
export default Gas;
