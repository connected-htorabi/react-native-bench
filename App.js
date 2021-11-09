import React from "react";
import { Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Wallet from "./screens/Wallet";
import Home from "./screens/Home";
import About from "./screens/About";
import { HeaderRight, HeaderLeft } from "./components/NavHeader";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const IconMapping = {
  Grocery: "basket",
  Home: "home",
  Browse: "text-search",
  Orders: "receipt",
  Account: "account",
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => {
          return {
            tabBarActiveTintColor: "black",
            headerTitleAlign: "center",
            headerRight: () => (
              <HeaderRight navigation={navigation} route={route} />
            ),
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={IconMapping[route.name]}
                color={color}
                size={size}
              />
            ),
          };
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Browse" component={() => <Text>Browse</Text>} />
        <Tab.Screen name="Grocery" component={() => <Text>Grocery</Text>} />
        <Tab.Screen name="Orders" component={() => <Text>Orders</Text>} />
        <Tab.Screen name="Account" component={() => <Text>Account</Text>} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
