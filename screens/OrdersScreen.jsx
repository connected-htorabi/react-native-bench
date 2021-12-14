/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, useDispatch } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import Orders from '../components/Orders';
import {
    selectHistoryOrders,
    selectUpcomingOrders,
} from '../redux/orders/selectors';
import { SafeAreaView } from "react-native";

import { useGetOrdersQuery } from '../redux/services/restaurant';

const Tab = createMaterialTopTabNavigator();

const OrdersScreen = ({ navigation}) => {
    useGetOrdersQuery();

    const upcomingOrders = useSelector(selectUpcomingOrders);
    const historyOrders = useSelector(selectHistoryOrders);

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
        <PageHeader title="Orders" navigation={navigation} />
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
        </SafeAreaView>
    );
};

export default OrdersScreen;
