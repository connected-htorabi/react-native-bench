import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Expandable from "./components/Expandable";
import Header from "./components/Header";
import Body from "./components/Body";
import Icon from "./components/Icon";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Expandable>
        <Header style={styles.header}></Header>
        <Icon/>
        <Body><Text>Hello World!</Text></Body>
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
  header: {
    backgroundColor: "#fcc",
    width: 200,
    height: 100,
  }
});