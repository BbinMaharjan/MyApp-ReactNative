import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Colors from "../constants/colors";
import {
  AppBar,
  TypeCard,
  CustomButton,
  TransactionCard,
} from "../components/material";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <AppBar />
        <Text style={styles.balanceHeading}>Your Balance</Text>
        <Text style={styles.balance}>$547,000.00</Text>
        <View style={styles.typeCards}>
          <TypeCard
            color={Colors.lightBlue}
            icon='airplane-outline'
            title='Expenses'
            amount='$5,000'
          />
          <TypeCard
            color={Colors.lightPink}
            icon='car-sport-outline'
            title='Spend on Goals'
            amount='$15,000'
          />
        </View>
      </View>
      <View style={styles.transactionContainer}>
        <View style={{ ...styles.container, marginTop: 15 }}>
          <View style={styles.titleBar}>
            <Text style={styles.amount}>Transactions</Text>
            <CustomButton title='View All' color={Colors.blue} bgc='#eee' />
          </View>
          <View style={styles.transactions}>
            <TransactionCard
              icon='car'
              title='Car Purchase'
              subtitle='Auto Loan'
              amount='$250'
              color='#56d289'
            />
            <TransactionCard
              icon='home'
              title='House Purchase'
              subtitle='Airbnb Home'
              amount='$2250'
              color='#3b58b8'
            />
            <TransactionCard
              icon='gift'
              title='Transport'
              subtitle='Uber Pathao'
              amount='$250'
              color='#f65d4e'
            />
            <TransactionCard
              icon='shoppingcart'
              title='Shopping'
              subtitle='Wish,Apple'
              amount='$350'
              color='#1bbbb9'
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  container: {
    paddingHorizontal: 40,
    marginVertical: 40,
  },
  balanceHeading: {
    marginTop: 40,
    fontSize: 20,
    color: "#aaa",
  },
  balance: {
    marginTop: 10,
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
  },
  typeCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
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
  transactionContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});

export default HomeScreen;
