import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { Card } from "../components/cards";
const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.appbar}>
          <Ionicons name='menu-sharp' size={30} color='black' />
          <Ionicons name='md-notifications-outline' size={30} color='black' />
        </View>
        <Text style={styles.balanceHeading}>Wellcome Back</Text>
        <Text style={styles.fullname}>Creative Mints</Text>
        <View style={styles.typeCards}>
          <Card
            color={Colors.lightGreen}
            icon='dollar'
            title='7 Items'
            amount='Transaction'
          />
          <Card
            color={Colors.lightRed}
            icon='money'
            title='4 Items'
            amount='Budget'
          />
        </View>
        <View style={styles.typeCards}>
          <Card
            color={Colors.lightYellow}
            icon='star'
            title='6 Items'
            amount='Recommend'
          />
          <Card
            color='blue'
            icon='credit-card'
            title='3 Card'
            amount='Credit Card'
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingHorizontal: 40,
    marginVertical: 40,
  },
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typeCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  balanceHeading: {
    marginTop: 40,
    fontSize: 20,
    color: "#aaa",
  },
  fullname: {
    marginTop: 10,
    fontSize: 26,
    color: "#000",
  },
});
export default ProfileScreen;
