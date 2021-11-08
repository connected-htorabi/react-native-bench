import React from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const HeaderLeft = ({ navigation }) => {
  return (
    <View>
      <Ionicons
        name="menu"
        onPress={() => navigation.navigate("About")}
        size={40}
      />
    </View>
  );
};

export const HeaderRight = ({ navigation, route }) => {
  return (
    <View style={rightStyles.container}>
      <Ionicons
        name="wallet-outline"
        onPress={() => navigation.navigate("Wallet")}
        style={route.name === "Wallet" && rightStyles.activeIcon}
        size={30}
      />
      <Ionicons
        name="cart-outline"
        onPress={() => navigation.navigate("Cart")}
        style={route.name === "Cart" && rightStyles.activeIcon}
        size={30}
      />
    </View>
  );
};

const rightStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  activeIcon: {
    color: "blue",
  },
});
