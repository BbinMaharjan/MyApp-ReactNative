import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Heading, Title, TextCount } from "./components/heading";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.tabhead}>
        <Heading color='white'>Profile</Heading>
      </View>
      <View style={styles.continer}>
        <View style={styles.img}>
          <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>
            GD
          </Text>
        </View>
        <Heading>Gol D. Roger</Heading>
        <Title>Roger Pirates,Captain</Title>
        <Text numberOfLines={5} style={{ marginTop: 40, color: "black" }}>
          Gol D. Roger more commonly known as Gold Roger,was a legendary pirate
          who, as captain of the Roger Pirates, held the title of Pirate King
          and owned the legendary treasure known as One Piece. He was also the
          lover of Portgas D. Rouge and the biological father of Portgas D. Ace.
        </Text>
        <View style={styles.banner}>
          <TextCount number={5} text={"Post"} />
          <TextCount number={564} text={"Following"} />
          <TextCount number={8000} text={"Followers"} />
        </View>
        <View style={styles.buttom}>
          <Heading color='white'>FOLLOW</Heading>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
  },
  buttom: {
    backgroundColor: "skyblue",
    width: "100%",
    padding: 5,
    marginTop: 50,
    alignItems: "center",
    borderRadius: 50,
  },
  tabhead: {
    backgroundColor: "skyblue",
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  continer: {
    padding: 25,
  },
  heading: {
    width: "100%",
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  img: {
    width: "50%",
    height: "25%",
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 100,
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginTop: 40,
    justifyContent: "center",
  },
});
