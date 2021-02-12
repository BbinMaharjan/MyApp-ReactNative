import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
const Card = (props) => {
  return (
    <View style={{ ...styles.typeCard, backgroundColor: props.color }}>
      <FontAwesome name={props.icon} size={50} color='white' />
      <Text style={styles.amount}>{props.amount}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  typeCard: {
    width: "48%",
    height: 170,
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
  },
  amount: {
    marginVertical: 6,
    color: "#fff",
    fontSize: 16,
  },
  title: {
    color: "#fff",
  },
});

export { Card };
