import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CreditScreen from "./Credit";

const AddAcc = () => {
  const onpress = () => {
    return (
      <View>
        <CreditScreen />
      </View>
    );
  };
  return (
    <View style={Styles.AddAcc}>
      <View style={Styles.components}>
        <View style={Styles.Button}>
          <TouchableOpacity onPress={onpress}>
            <View style={Styles.icon}>
              <Image
                source={require("../assets/images/icon_1.jpg")}
                resizeMode="contain"
                style={{
                  width: 28.58,
                  height: 25.4,
                }}
              />
            </View>
            <Text style={Styles.text} onPress={onpress}>
              Add Account
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.Button}>
          <TouchableOpacity onPress={onpress}>
            <View style={Styles.icon}>
              <Image
                source={require("../assets/images/icon_2.jpg")}
                resizeMode="contain"
                style={{
                  width: 28.58,
                  height: 25.4,
                }}
              />
            </View>
            <Text style={Styles.text} onPress={onpress}>
              Add Car
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.Button}>
          <TouchableOpacity onPress={onpress}>
            <View style={Styles.icon}>
              <Image
                source={require("../assets/images/icon_3.jpg")}
                resizeMode="contain"
                style={{
                  width: 28.58,
                  height: 25.4,
                }}
              />
            </View>
            <Text style={Styles.text} onPress={onpress}>
              Add Branch
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  AddAcc: {
    backgroundColor: "gray",
    width: 345,
    height: 132,
    borderRadius: 15,
  },
  components: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Button: {
    width: 65,
    height: 93,
    borderRadius: 10,
    margin: 25,
  },
  text: {
    fontSize: 11,
    alignItems: "center",
    margin: 3,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#F2F2F2",
    width: 65,
    height: 65,
  },
});

export default AddAcc;
