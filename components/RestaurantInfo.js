import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantInfo({ info }) {
  const { name, price, reviews, rating } = info;
  return (
    <>
      <Text style={styles.restaurantName}>{name}</Text>
      <View style={styles.detailRow}>
        <MaterialCommunityIcons name="star" size={25} />
        <Text style={[styles.detailText, { marginLeft: 5 }]}>
          {rating} ({reviews}+ Ratings) • Coffee
        </Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailText}>
          15 - 20 min • {price} Delivery Fee
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  restaurantName: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "700",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    fontSize: 20,
  },
  detailText: {
    fontSize: 15,
  },
});