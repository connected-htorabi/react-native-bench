import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native";

import RestaurantItem from "../components/RestaurantItem";

export default function About({ navigation, route }) {
  return (
    <View style={{ backgroundColor: "#eee", flex: 1 }}>
      <Button onPress={()=>navigation.navigate("Home")}/>
      <Text>About</Text>
    </View>
  );
}
