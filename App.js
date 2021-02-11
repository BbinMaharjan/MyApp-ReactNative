import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          MyCalculator
        </Text>
      </View>
      <View style={styles.dispaly}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 75 }}>
          0
        </Text>
      </View>
      <View style={styles.number}>
        <View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              /
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              1
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              4
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              7
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              %
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              X
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              2
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              5
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              8
            </Text>
          </View>
          <View style={styles.no}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}>
              0
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              -
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              3
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              6
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              9
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              .
            </Text>
          </View>
        </View>
        <View style={styles.last}>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              C
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              +
            </Text>
          </View>
          <View style={styles.no}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              =
            </Text>
          </View>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    flex: 1,
    backgroundColor: "gray",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  dispaly: {
    flex: 4,
    backgroundColor: "skyblue",
    margin: 15,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  number: {
    flex: 8,
    margin: 15,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  no: {
    width: 75,
    flex: 1,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
