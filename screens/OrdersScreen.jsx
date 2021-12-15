/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import Orders from '../components/Orders';
import {
    selectHistoryOrders,
    selectUpcomingOrders,
} from '../redux/orders/selectors';

import { useGetOrdersQuery } from '../redux/services/restaurant';

const Tab = createMaterialTopTabNavigator();

const OrdersScreen = () => {
    useGetOrdersQuery();

    const upcomingOrders = useSelector(selectUpcomingOrders);
    const historyOrders = useSelector(selectHistoryOrders);

    return (
        <Tab.Navigator
            initialRouteName="Upcoming"
            tabBarOptions={{
                labelStyle: {
                    fontSize: 15,
                },
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
                component={() => <Orders orders={historyOrders} />}
            />
        </Tab.Navigator>
    );
};

export default OrdersScreen;
