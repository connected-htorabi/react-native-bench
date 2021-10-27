import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Expandable from "./components/Expandable";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Expandable>
        <Text>Hello, world!</Text>
      </Expandable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
