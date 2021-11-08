import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native";

import RestaurantItem from "../components/RestaurantItem";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}
