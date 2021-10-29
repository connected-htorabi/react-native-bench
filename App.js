import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Expandable from "./components/Expandable";
import Header from "./components/Header";
import Body from "./components/Body";
import Icon from "./components/Icon";

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
          </Header>
          <Icon />
          <Body>
            <Text>{item.note}</Text>
          </Body>
        </Expandable>
      ))}
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
  },
});
