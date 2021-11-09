import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Starbucks (Yonge & Finch)",
    image_url:
      "https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg",

    price: "$0.99",
    reviews: 1000,
    rating: 4.9,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",

    price: "$3.20",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/11ADE/production/_110541427_chinesefood.jpg",

    price: "$10.50",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://d1ralsognjng37.cloudfront.net/f41159d2-cdfd-48dc-86d5-af4088d30774.jpeg",

    price: "$2.00",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {localRestaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}
const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>
        {" "}
        <MaterialCommunityIcons
          name="ticket-confirmation"
          size={15}
          color="green"
        />{" "}
        • $0.99 Delivery Fee • 30-45 min
      </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{props.rating}</Text>
    </View>
  </View>
);
