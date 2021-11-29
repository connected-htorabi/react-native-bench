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
        <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>{quantity}x</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text>{name}</Text>
            {description && (
                <Text style={styles.description}>{description}</Text>
            )}
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>${parseFloat(price).toFixed(2)}</Text>
        </View>
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
    quantityContainer: {
        flex: 2,
    },
    quantity: {
        color: 'green',
        fontWeight: 'bold',
        flex: 1,
    },
    infoContainer: { flex: 10 },
    description: {
        color: 'grey',
        flex: 10,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    priceContainer: {
        flex: 2,
    },
    price: {
        fontWeight: 'bold',
    },
});
