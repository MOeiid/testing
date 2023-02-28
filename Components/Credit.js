import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreditScreen = () => {
  return (
    <Background>
      <View style={Styles.container}>
        <Text>Credit Screen!</Text>
      </View>
    </Background>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CreditScreen;
