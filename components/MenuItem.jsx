import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { Text, StyleSheet, View, Image } from 'react-native';

import { propTypes } from './RestaurantItem';

const MenuItem = ({ item }) => {
    const { name, imageUrl, price, calories, description } = item;
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 10,
                        marginTop: 10,
                    }}
                >
                    {name}
                </Text>
                <View style={styles.innerContainer}>
                    <Text>${price}</Text>
                    <Text> {calories} Cal.</Text>
                </View>
                <Text>{description}</Text>
            </View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
    );
};

MenuItem.propTypes = {
    item: PropTypes.shape(omit(propTypes, ['deliveryTime'])),
};

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    leftContainer: {
        width: '70%',
    },
    image: {
        height: '100%',
        width: '30%',
    },
});
