import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onButtonPlaceCustomEventHandler}>
      <View style={{ ...style.button, backgroundColor: props.color }}>
        <Text style={{ ...style.buttonText, color: props.textColor }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const CustomButton2 = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onButtonPlaceCustomEventHandler}>
      <View style={{ ...style.button, backgroundColor: props.color }}>
        <Text style={{ ...style.buttonText, color: props.textColor }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  button: {
    width: "50%",
    alingItem: "center",
    justifyCintent: "center",
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export { CustomButton, CustomButton2 };
