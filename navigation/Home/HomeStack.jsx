import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderRight, HeaderLeft } from '../../components/NavHeader';
import Wallet from '../../screens/Wallet';
import HomeScreen from '../../screens/HomeScreen';
import RestaurantDetails from '../../screens/RestaurantDetails';
import ItemDetails from '../../screens/ItemDetails';
import Cart from '../../screens/Cart';
import ResultsShow from '../../screens/ResultsShow';
const Stack = createNativeStackNavigator();

export const HomeStack = () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
            headerTitleAlign: 'center',
            headerRight: () => (
                <HeaderRight navigation={navigation} route={route} />
            ),
        })}
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
                headerLeft: () => <HeaderLeft navigation={navigation} />,
            })}
        />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerRight: null }}
        />
        <Stack.Screen name="Restaurant Details" component={RestaurantDetails} />
        <Stack.Screen
            name="Item Details"
            component={ItemDetails}
            options={({ route }) => ({ title: route.params.itemName })}
        />
        <Stack.Screen name="Results Show" component={ResultsShow} />
    </Stack.Navigator>
);
