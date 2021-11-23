import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const PaymentItem = ({ label, value, isTotal = false }) => (
    <View style={styles.container}>
        <Text style={[styles.label, isTotal && styles.labelTotal]}>
            {label}
        </Text>
        <Text style={[styles.value, isTotal && styles.valueTotal]}>
            ${value}
        </Text>
    </View>
);

PaymentItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    isTotal: PropTypes.bool,
};

export default PaymentItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    value: {
        fontWeight: 'bold',
        color: 'green',
    },
    valueTotal: {
        color: 'black',
    },
    label: {
        color: 'grey',
    },
    labelTotal: {
        fontWeight: 'bold',
    },
});
