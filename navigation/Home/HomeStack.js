import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HeaderRight, HeaderLeft } from "../../components/NavHeader";
import Wallet from "../../screens/Wallet";
import Home from "../../screens/Home";
import RestaurantDetails from "../../screens/RestaurantDetails";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ route, navigation }) => ({
          headerTitleAlign: "center",
          headerRight: () => (
            <HeaderRight navigation={navigation} route={route} />
          ),
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Cart" component={() => <Text>Cart</Text>} />
      <Stack.Screen name="Restaurant Details" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};
