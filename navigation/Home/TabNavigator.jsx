import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStack } from './HomeStack';
import OrdersScreen from '../../screens/OrdersScreen';
import AccountScreen from '../../screens/AccountScreen';
import Browse from '../../screens/Browse';
import { HeaderLeft } from '../../components/NavHeader';

const Tab = createBottomTabNavigator();

const IconMapping = {
    Grocery: 'basket',
    MainScreen: 'home',
    Browse: 'text-search',
    Orders: 'receipt',
    Account: 'account',
};

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName="MainScreen"
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
            name="MainScreen"
            component={HomeStack}
            options={{ headerShown: false, title: 'Home' }}
        />
        <Tab.Screen
            name="Browse"
            component={Browse}
            options={{
                headerLeft: HeaderLeft,
            }}
        />
        <Tab.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
                headerLeft: HeaderLeft,
            }}
        />
        <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
                headerLeft: HeaderLeft,
            }}
        />
    </Tab.Navigator>
);
export default TabNavigator;
