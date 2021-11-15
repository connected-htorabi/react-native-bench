import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native";
import { PageHeader } from "../components/PageHeader";


export default function Gift({ navigation, route }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      
      <PageHeader title="Gift" navigation={navigation}/>
  
 
    </SafeAreaView>
  );
}
