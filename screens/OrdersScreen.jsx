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
    const historyOrders = useSelector(selectHistoryOrders);
    const upcomingOrders = useSelector(selectUpcomingOrders);

    return (
        <Tab.Navigator
            initialRouteName="Upcoming"
            screenOptions={{
                tabBarActiveTintColor: 'black',
                headerTitleAlign: 'center',
                tabBarIconStyle: { display: 'none' },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
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
