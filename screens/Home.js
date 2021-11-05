import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native";

import RestaurantItem from "../components/RestaurantItem";

export default function Home({ navigation, route }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      {!!route.params && <Text>{route.params.itemId}</Text>}
      <Button title="click" onPress={() => navigation.navigate("Wallet")} />
      <View style={{ backgroundColor: "white", padding: 15 }}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}
