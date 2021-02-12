import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { StatusBar, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab1}>
        <View style={styles.head}>
          <View style={styles.icon}>
            <Text style={{ color: "white", fontSize: 25 }}>+</Text>
          </View>
          <View style={styles.icon2}>
            <Text style={{ color: "white", fontSize: 25 }}>-</Text>
          </View>
        </View>
        <Text style={{ color: "gray", fontSize: 16, padding: 5 }}>
          Your Balance
        </Text>
        <Text style={{ color: "white", fontSize: 25 }}>$547,000.00</Text>
        <View style={styles.cards}>
          <View style={styles.card1}>
            <Text>Image</Text>
            <Text>$5,000</Text>
            <Text> Expense</Text>
          </View>
          <View style={styles.card2}>
            <Text>Image</Text>
            <Text>$15000</Text>
            <Text>Spend To Goals</Text>
          </View>
        </View>
      </View>
      <View style={styles.tab2}>
        <View style={styles.head}>
          <View style={styles.icon}>
            <Text style={{ color: "white", fontSize: 25 }}>+</Text>
          </View>
          <View style={styles.icon2}>
            <Text style={{ color: "white", fontSize: 25 }}>-</Text>
          </View>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  tab1: {
    flex: 1,
    marginTop: 30,
    padding: 20,
    backgroundColor: "blue",
  },
  tab2: {
    flex: 1,
    backgroundColor: "gray",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  head: {
    marginTop: 30,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    alignItems: "flex-start",
  },
  icon2: {
    alignItems: "flex-end",
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  card1: {
    backgroundColor: "red",
    width: 150,
    height: 175,
    padding: 10,
    borderRadius: 20,
  },
  card2: {
    width: 150,
    height: 175,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "pink",
  },
});

export default Home;
