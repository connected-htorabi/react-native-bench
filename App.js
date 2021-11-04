import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Expandable from "./components/Expandable";
import Header from "./components/Header";
import Body from "./components/Body";
import Icon from "./components/Icon";
import Payee from "./components/Payee";

const info = [
  { header: "First Header", note: "First Note" },
  { header: "Second Header", note: "Second Note" },
  { header: "Third Header", note: "Third Note" },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const onExpand = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {info.map((item, index) => (
        <Expandable
          shouldExpand={index === activeIndex}
          onExpand={() => onExpand(index)}
          key={index}
        >
          <Header dataIndex={index}>
            <Text>{item.header}</Text>
            <Icon />
          </Header>

          <Body>
            <Text>{item.note}</Text>
          </Body>
        </Expandable>
      ))}
      <Payee name="Haydn" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: "#fcc",
    width: 200,
    height: 100,
  },
});
