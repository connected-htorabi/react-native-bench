import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { alignItems } from 'styled-system';
import OrderItem from './OrderItem';

const renderItem = ({ item }) => <OrderItem order={item} />;

const Orders = ({ orders }) => {
    return orders.length ? (
        <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    ) : (
        <View style={styles.emptyViewContainer}>
            <Text>Nothing to see here</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
});

export default Orders;
