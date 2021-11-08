import React from "react";
import { Image, StyleSheet, Text, FlatList } from "react-native";
import MenuItem from "../components/MenuItem";
import RestaurantInfo from "../components/RestaurantInfo";

const restaurantDetails = {
  name: "Starbucks (Yonge & Finch)",
  image_url:
    "https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg",

  price: "$0.99",
  reviews: 1000,
  rating: 4.9,
};

const items = [
  {
    id: 1,
    name: "Double-Smoked Bacon, Cheddar & Egg Sandwich",
    price: 6.25,
    calories: 500,
    description:
      "Bacon smoked for six hours over hickory wood chips, stacked with something",
    image_url: "../images/item.png",
    tags: ["Popular"],
  },
  {
    id: 2,
    name: "Everything Croissant & Roasted Ham Sandwich",
    price: 6.25,
    calories: 500,
    description:
      "Bacon smoked for six hours over hickory wood chips, stacked with something",
    image_url: "../images/item.png",
    tags: [],
  },
  {
    id: 3,
    name: "Mango Dragonfruit Lemonade",
    price: 6.25,
    calories: 500,
    description:
      "Bacon smoked for six hours over hickory wood chips, stacked with something",
    image_url: "../images/item.png",
    tags: [],
  },
];

export default function RestaurantDetails() {
  return (
    <>
      <Image
        style={styles.headerImage}
        source={{ uri: restaurantDetails.image_url }}
      />
      <RestaurantInfo info={restaurantDetails} />
      <Text>Picked for you</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => <MenuItem item={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: "20%",
  },
});
