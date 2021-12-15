import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderRight, TempHeaderLeft } from '../../components/NavHeader';
import HomeScreen from '../../screens/HomeScreen';
import RestaurantDetails from '../../screens/RestaurantDetails';
import ItemDetails from '../../screens/ItemDetails';
import Cart from '../../screens/Cart';
import ResultsShow from '../../screens/ResultsShow';

const Stack = createNativeStackNavigator();

export const HomeStack = () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTitleAlign: 'center',
            headerRight: HeaderRight,
        }}
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerLeft: TempHeaderLeft,
            }}
        />
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
