import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { propTypes } from './RestaurantItem';
import DetailsHeader from './DetailsHeader';

const RestaurantInfo = ({ info }) => {
    const { name, price, rating, deliveryTime, numReviews, category } = info;
    return (
        <>
            <DetailsHeader title={name} />
            <View style={styles.detailRow}>
                <MaterialCommunityIcons name="star" size={25} />
                <Text style={[styles.detailText, { marginLeft: 5 }]}>
                    {rating} ({numReviews} Ratings) • {category}
                </Text>
            </View>
            <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                    {deliveryTime} • ${price.toFixed(2)} Delivery Fee
                </Text>
            </View>
        </>
    );
};

RestaurantInfo.propTypes = {
    info: PropTypes.shape(propTypes),
};

export default RestaurantInfo;

const styles = StyleSheet.create({
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        fontSize: 20,
    },
    detailText: {
        fontSize: 15,
    },
});
