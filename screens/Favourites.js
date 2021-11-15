import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native";
import { PageHeader } from "../components/PageHeader";


export default function Favourites({ navigation, route }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      
      <PageHeader title="My favourites" navigation={navigation}/>
  
 
    </SafeAreaView>
  );
}
