import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeStack } from './HomeStack';
import AppStack from './AppStack';

const Tab = createBottomTabNavigator();

const IconMapping = {
    Grocery: 'basket',
    Home: 'home',
    Browse: 'text-search',
    Orders: 'receipt',
    Account: 'account',
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => {
                return {
                    tabBarActiveTintColor: 'black',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name={IconMapping[route.name]}
                            color={color}
                            size={size}
                        />
                    ),
                };
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="Browse" component={() => <Text>Browse</Text>} />
            <Tab.Screen name="Grocery" component={() => <Text>Grocery</Text>} />
            <Tab.Screen name="Orders" component={() => <Text>Orders</Text>} />
            <Tab.Screen name="Account" component={() => <Text>Account</Text>} />
        </Tab.Navigator>
    );
};
export default TabNavigator;
