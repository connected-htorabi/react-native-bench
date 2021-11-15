import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PageHeader } from "../components/PageHeader";


export default function Help({ navigation, route }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      
  <PageHeader title="Help" navigation={navigation}/>
  
 
    </SafeAreaView>
  );
}
