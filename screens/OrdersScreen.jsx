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

const HistoryOrders = () => {
    const historyOrders = useSelector(selectHistoryOrders);
    return <Orders orders={historyOrders} />;
};

const UpcomingOrders = () => {
    const upcomingOrders = useSelector(selectUpcomingOrders);

    return <Orders orders={upcomingOrders} />;
};

const OrdersScreen = () => {
    useGetOrdersQuery();

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
                component={UpcomingOrders}
            />
            <Tab.Screen
                name="History"
                title="History"
                component={HistoryOrders}
            />
        </Tab.Navigator>
    );
};

export default OrdersScreen;
