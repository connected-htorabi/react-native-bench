import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

export const OrderItemPropTypes = {
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    itemSubtotal: PropTypes.number.isRequired,
};

const OrderItem = ({ quantity, name, options, itemSubtotal }) => (
    <View style={styles.container}>
        <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>{quantity}x</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text>{name}</Text>
            {options && (
                <View>
                    {options.map(({ id, name: optionName, price }) => (
                        <Text key={id} style={styles.description}>
                            {optionName} (${price.toFixed(2)})
                        </Text>
                    ))}
                </View>
            )}
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{`$${parseFloat(itemSubtotal).toFixed(
                2
            )}`}</Text>
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
        padding: 10,
    },
    quantityContainer: {
        flex: 2,
    },
    quantity: {
        color: 'green',
        fontWeight: 'bold',
    },
    infoContainer: { flex: 10 },
    description: {
        color: 'grey',
        flex: 10,
    },
    priceContainer: {
        flex: 2,
    },
    price: {
        fontWeight: 'bold',
    },
});
