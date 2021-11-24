import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const BaseCardItem = ({ type, cardNumber, children }) => (
    <View style={styles.container}>
        <View style={styles.cardInfoContainer}>
            <Icon name={`cc-${type}`} size={30} style={styles.icon} />
            <Text>{cardNumber}</Text>
        </View>
        {children}
    </View>
);

BaseCardItem.propTypes = {
    cardNumber: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['visa', 'amex', 'mastercard']).isRequired,
    children: PropTypes.node,
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
});

export default BaseCardItem;
