import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Heading = (props) => {
  const color = props.color == null || props.color == "dark" ? "#000" : "#fff";
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",
        color: props.color == null ? "#000" : "#fff",
      }}>
      {props.children}
    </Text>
  );
};

const Title = (props) => {
  return (
    <Text
      style={{
        fontSize: 14,
        color: props.color == null ? "#000" : "#fff",
        fontStyle: "italic",
      }}>
      {props.children}
    </Text>
  );
};

const TextCount = (props) => {
  return (
    <View style={styles.main}>
      <Text classname='number' style={styles.number}>
        {props.number}
      </Text>
      <Text classname='text'>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    paddingRight: 35,
    paddingLeft: 40,
    alignItems: "center",
  },
  number: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#4d88ff",
  },
});

export { Heading, Title, TextCount };
