import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomButton, CustomButton2 } from "./components/buttons/button";

export default function App() {
  const clickHandler = () => {
    console.log("Button clicked");
  };
  return (
    <View>
      <CustomButton
        color='red'
        textcolor='white'
        title='Click Me'
        onButtonPlaceCustomEventHandler=''
      />
      <CustomButton
        color='red'
        textcolor='white'
        title='Click Me'
        onButtonPlaceCustomEventHandler=''
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
