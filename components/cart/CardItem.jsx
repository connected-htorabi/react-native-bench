import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardItem = ({
    type,
    cardNumber,
    isSelected = false,
    isList = true,
    onClick = () => {},
}) => (
    <TouchableHighlight onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.cardInfoContainer}>
                <Icon name={`cc-${type}`} size={30} style={styles.icon} />
                <Text>{cardNumber}</Text>
            </View>
            {isList ? (
                <Icon name="check" color={isSelected ? 'green' : null} />
            ) : (
                <Text style={styles.change}>Change</Text>
            )}
        </View>
    </TouchableHighlight>
);

CardItem.propTypes = {
    cardNumber: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['visa', 'amex', 'mastercard']).isRequired,
    isList: PropTypes.bool,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
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
    change: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default CardItem;
