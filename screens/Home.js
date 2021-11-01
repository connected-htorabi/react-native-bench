import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native";

import RestaurantItem from "../components/RestaurantItem";

export default function Home() {

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
    <View style={{ backgroundColor: "white", padding: 15 }}>
   
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <RestaurantItem/>
      <RestaurantItem/>
      <RestaurantItem/>
    </ScrollView>
  </SafeAreaView>
  );
}
