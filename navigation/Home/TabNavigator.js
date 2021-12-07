import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeStack } from './HomeStack';
import AppStack from './AppStack';
import OrdersScreen from '../../screens/OrdersScreen';

const Tab = createBottomTabNavigator();

const IconMapping = {
    Grocery: 'basket',
    Home: 'home',
    Browse: 'text-search',
    Orders: 'receipt',
    Account: 'account',
};

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'black',
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                    name={IconMapping[route.name]}
                    color={color}
                    size={size}
                />
            ),
        })}
    >
        <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{ headerShown: false }}
        />
        <Tab.Screen name="Browse" component={() => <Text>Browse</Text>} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Account" component={() => <Text>Account</Text>} />
    </Tab.Navigator>
);
export default TabNavigator;
