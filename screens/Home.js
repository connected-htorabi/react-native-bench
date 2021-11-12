import React from "react";
import { SafeAreaView, ScrollView, FlatList } from "react-native";

import RestaurantItem from "../components/RestaurantItem";
import { localRestaurants } from "../constants";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={localRestaurants}
        renderItem={({ item }) => (
          <RestaurantItem
            name={item.name}
            image_url={item.image_url}
            rating={item.rating}
            onPress={() =>
              navigation.navigate("Restaurant Details", { id: item.id })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
