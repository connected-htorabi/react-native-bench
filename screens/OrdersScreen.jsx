/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { orders, upcomingOrders } from '../constants';
import Orders from '../components/Orders';

const Tab = createBottomTabNavigator();

const OrdersScreen = () => (
    <Tab.Navigator
        initialRouteName="Upcoming"
        tabBarOptions={{
            labelStyle: {
                fontSize: 20,
            },
            tabBarPosition: 'top',
        }}
        screenOptions={{
            tabBarActiveTintColor: 'black',
            headerTitleAlign: 'center',
            tabBarIconStyle: { display: 'none' },
        }}
    >
        <Tab.Screen
            name="Upcoming"
            title="Upcoming"
            component={() => <Orders orders={upcomingOrders} />}
        />
        <Tab.Screen
            name="History"
            title="History"
            component={() => <Orders orders={orders} />}
        />
    </Tab.Navigator>
);

export default OrdersScreen;
