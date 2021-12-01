import React from 'react';
import { FlatList } from 'react-native';
import OrderItem from './OrderItem';

const Orders = ({ orders }) => {
    const renderItem = ({ item }) => <OrderItem order={item} />;

    return (
        <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    );
};

export default Orders;
