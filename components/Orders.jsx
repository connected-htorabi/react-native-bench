import React from 'react';
import { FlatList } from 'react-native';
import OrderItem from './OrderItem';

const renderItem = ({ item }) => <OrderItem order={item} />;

const Orders = ({ orders }) => {
    return (
        <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    );
};

export default Orders;
