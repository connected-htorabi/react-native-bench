import React from "react";
import { Text, StyleSheet } from "react-native";

export default function RestaurantInfo({ info }) {
  const { name, image_url, price, reviews, rating } = info;
  return (
    <>
      <Text>{name}</Text>
    </>
  );
}
