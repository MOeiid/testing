import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CarNumber = () => {
  return (
    <View style={Styles.car_credit}>
      <View style={Styles.carnumbers}>
        <Text style={Styles.text_1}>Car Numbers</Text>
        <Text style={Styles.text}>(30)</Text>
      </View>
      <View style={Styles.carnumbers}>
        <Text style={Styles.text_1}>Credit</Text>
        <Text style={Styles.text}>
          (3000 <Text style={Styles.EGP}>EGP</Text>)
        </Text>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  car_credit: {
    flexDirection: "row",
    width: 241,
  },
  carnumbers: {
    backgroundColor: "#3F403F",
    height: 42,
    width: 113,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  EGP: {
    fontWeight: "medium",
    fontSize: 7,
    color: "white",
  },
  text_1: {
    fontWeight: "regular",
    fontSize: 8,
    marginTop: 3,
    color: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 11,
    color: "white",
  },
});

export default CarNumber;
