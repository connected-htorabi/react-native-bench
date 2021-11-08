import React from "react";
import { Text, StyleSheet } from "react-native";

export default function MenuItem({ item }) {
  const { name, image_url, price, calories, description, tags } = item;
  return (
    <>
      <Text>{name}</Text>
    </>
  );
}
