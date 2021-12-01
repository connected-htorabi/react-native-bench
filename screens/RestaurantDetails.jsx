import React from 'react';
import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import MenuItem from '../components/MenuItem';
import RestaurantInfo from '../components/RestaurantInfo';
import ImageHeader from '../components/ImageHeader';
import { selectRestaurants } from '../redux/restaurants/selectors';
import {
    localRestaurants,
    restaurantItems,
    CONTAINER_PADDING,
} from '../constants';

const RestaurantDetails = ({ navigation, route }) => {
    const restaurants = useSelector(selectRestaurants);
    const restaurantDetails = restaurants.find(
        (item) => item.id === route.params.id
    );
    // const restaurantDetails = localRestaurants.find(
    //     (item) => item.id === route.params.id
    // );

    const renderHeader = () => (
        <>
            <ImageHeader
                imageUrl={restaurantDetails.imageUrl}
                parentPadding={CONTAINER_PADDING}
            />
            <RestaurantInfo info={restaurantDetails} />
            <Text style={styles.subHeader}>Picked for you</Text>
        </>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('Item Details', { item })}
        >
            <MenuItem item={item} />
        </TouchableOpacity>
    );

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={renderHeader}
            data={restaurantItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: CONTAINER_PADDING,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 25,
    },
});

export default RestaurantDetails;
