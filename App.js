import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  CustomButton,
  CustomButton2,
  CustomButton3,
  CustomButton4,
} from "./components/buttons/button";

export default function App() {
  const clickHandler = () => {
    console.log("Button clicked");
  };
  return (
    <View style={styles.container}>
      <Text>Buttons</Text>
      <CustomButton
        color='red'
        textcolor='white'
        title='TouchableOpacity'
        onButtonPlaceCustomEventHandler=''
      />
      <Text>Buttons</Text>
      <CustomButton2
        color='green'
        textcolor='white'
        title='TouchableHighlight'
        onButtonPlaceCustomEventHandler=''
      />
      <Text>Buttons</Text>
      <CustomButton3
        color='blue'
        textcolor='white'
        title='TouchableNativeFeedBack'
        onButtonPlaceCustomEventHandler=''
      />
      <Text>Buttons</Text>
      <CustomButton4
        color='pink'
        textcolor='black'
        title='TouchableWithoutFeedback'
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
