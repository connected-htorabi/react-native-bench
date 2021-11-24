import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const QuantityControl = ({ quantity, onIncrement, onDecrement }) => (
    <View style={styles.quantityContainer}>
        <TouchableOpacity
            style={styles.changeQuantityButton}
            onPress={onDecrement}
        >
            <Text>-</Text>
        </TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity
            style={styles.changeQuantityButton}
            onPress={onIncrement}
        >
            <Text>+</Text>
        </TouchableOpacity>
    </View>
);

QuantityControl.propTypes = {
    quantity: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    changeQuantityButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'grey',
        marginHorizontal: 15,
    },
});

export default QuantityControl;
