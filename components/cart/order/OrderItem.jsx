import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

export const OrderItemPropTypes = {
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
};

const OrderItem = ({ quantity, name, description, price }) => (
    <View style={styles.container}>
        <Text style={styles.quantity}>{quantity}x</Text>
        <View>
            <Text>{name}</Text>
            {description && (
                <Text style={styles.description}>{description}</Text>
            )}
        </View>
        <Text style={styles.price}>${price}</Text>
    </View>
);

OrderItem.propTypes = OrderItemPropTypes;

export default OrderItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
    },
    quantity: {
        color: 'green',
        fontWeight: 'bold',
    },
    description: {
        color: 'grey',
    },
    price: {
        fontWeight: 'bold',
    },
});
