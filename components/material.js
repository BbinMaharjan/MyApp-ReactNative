import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/colors";

const AppBar = (props) => {
  return (
    <View style={styles.appbar}>
      <Ionicons name='chevron-back' size={24} color='white' />
      <Ionicons name='md-notifications-outline' size={24} color='white' />
    </View>
  );
};

const TypeCard = (props) => {
  return (
    <View style={{ ...styles.typeCard, backgroundColor: props.color }}>
      <Ionicons name={props.icon} size={50} color={Colors.blue} />
      <Text style={styles.amount}>{props.amount}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const CustomButton = (props) => {
  return (
    <View style={{ ...styles.button, backgroundColor: props.bgc }}>
      <Text style={{ color: props.color }}>{props.title}</Text>
    </View>
  );
};

const TransactionCard = (props) => {
  return (
    <View style={styles.transaction}>
      <View style={styles.tranLeft}>
        <View style={{ ...styles.iconContainer, backgroundColor: props.color }}>
          <AntDesign name={props.icon} size={30} color='#fff' />
        </View>
        <View>
          <Text style={styles.transactionTitle}>{props.title}</Text>
          <Text style={styles.transactionSubTitle}>{props.subtitle}</Text>
        </View>
      </View>
      <View style={styles.tranRight}>
        <Text>{props.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typeCard: {
    width: "48%",
    height: 180,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
  },
  transactionContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  transactions: {},
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  tranLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  tranRight: {},
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  transactionTitle: {
    fontWeight: "bold",
    fontSize: 13,
  },
  transactionSubTitle: {
    color: "#444",
    fontSize: 12,
  },
  amount: {
    marginVertical: 6,
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
  },
  title: {
    color: "#777",
  },
});
export { AppBar, TypeCard, CustomButton, TransactionCard };
