import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderRight, HeaderLeft } from '../../components/NavHeader';
import Wallet from '../../screens/Wallet';
import Home from '../../screens/Home';
import RestaurantDetails from '../../screens/RestaurantDetails';
import ItemDetails from '../../screens/ItemDetails';
import Cart from '../../screens/Cart';

const Stack = createNativeStackNavigator();

export var HomeStack = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Home}
            options={({ route, navigation }) => ({
                headerTitleAlign: 'center',
                headerRight: () => (
                    <HeaderRight navigation={navigation} route={route} />
                ),
                headerLeft: () => <HeaderLeft navigation={navigation} />,
            })}
        />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Restaurant Details" component={RestaurantDetails} />
        <Stack.Screen name="Item Details" component={ItemDetails} />
    </Stack.Navigator>
);
