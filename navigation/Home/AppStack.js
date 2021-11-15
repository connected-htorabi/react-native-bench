import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Home from "../../screens/Home";
import Wallet from "../../screens/Wallet";
import NavHeader from "../../components/NavHeader"
import Help from "../../screens/Help";
import Promotions from "../../screens/Promotions";
//import Favourites from "../screens/Favourites";
import Gift from "../../screens/Gift";
import CustomDrawerNav from "../../components/CustomDrawerNav";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import Wallet from "../../screens/Wallet";
//import BottomTabNavigator from "./BottomTabNavigator";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { HeaderLeft,HeaderRight } from "../../components/NavHeader";
import Favourites from "../../screens/Favourites";

const IconMapping = {
   
    Drawer: "shield",
    Favorites: "heart",
    Wallet: "credit-card",
    Help: "lifebuoy",
    Promotions:"tag",
    Gift:"gift"
  };
export default function AppStack() {
  return (
  
      <Drawer.Navigator
        drawerContent={props=><CustomDrawerNav {...props}/>}
        initialRouteName="Home"
        screenOptions={({ route }) => {
            return {
            headerShown:false,
            drawerActiveBackgroundColor: '#3CB371',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerItemStyle:{borderBottomColor: '#995d9a',
            borderBottomWidth: 0.3},
            drawerIcon: ({focused, size}) => (
                <MaterialCommunityIcons
                name={IconMapping[route.name]}
                size={size}
              />
             )
        }
        }}
        style={{borderBottomColor: '#995d9a',
        borderBottomWidth: 0.3}}
        
      >
          
        <Drawer.Screen
          name="Drawer"
          component={TabNavigator}
          //options={{ title: "Menu" }}
          
        />

    <Drawer.Screen
          name="Favorites"
          component={Favourites}
          //options={{ title: "Menu" }}
          
        />
       
        <Drawer.Screen
          name="Wallet"
          component={Wallet}
         // options={{ title: "Wallet" }}
        />
            <Drawer.Screen
          name="Help"
          component={Help}
          
         // options={{ title: "Wallet" }}
        />
           <Drawer.Screen
          name="Promotions"
          component={Promotions}
         // options={{ title: "Wallet" }}
        />
            <Drawer.Screen
          name="Gift"
          component={Gift}
         // options={{ title: "Wallet" }}
        />
        
      </Drawer.Navigator>
  
  );
}

