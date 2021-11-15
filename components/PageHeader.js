import React from "react";
import { StyleSheet, View,Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppStack from "../navigation/Home/AppStack"

export const PageHeader = ({ title, navigation }) => {
  return (
    <View style={{ backgroundColor: "white", padding: 15, flexDirection:"row"}}>
      
      <Ionicons
        name="menu"
        onPress={() =>navigation.openDrawer() }
        size={40}
      />

   
          <Text style={{ paddingLeft:100, fontWeight: 'bold', fontSize:22}}>{title}</Text>
      </View>
  );
};