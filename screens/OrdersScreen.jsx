/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, useDispatch } from 'react-redux';

import { upcomingOrders } from '../constants';
import Orders from '../components/Orders';
import { selectOrders } from '../redux/orders/selectors';
import { fetchOrders } from '../redux/thunks/fetchOrders';

const Tab = createMaterialTopTabNavigator();

const OrdersScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const orders = useSelector(selectOrders);

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
                component={() => <Orders orders={orders} />}
            />
        </Tab.Navigator>
    );
};

export default OrdersScreen;
