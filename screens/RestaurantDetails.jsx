import React, { useEffect } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from '../components/MenuItem';
import RestaurantInfo from '../components/RestaurantInfo';
import ImageHeader from '../components/ImageHeader';
import { selectRestaurantById } from '../redux/restaurants/selectors';
import { selectDishes } from '../redux/menu/selectors';
import { CONTAINER_PADDING } from '../constants';
import { fetchDishes } from '../redux/thunks/fetchDishes';

const RestaurantDetails = ({ navigation, route }) => {
    const restaurantId = route.params.id;
    const dispatch = useDispatch();
    const restaurantDetails = useSelector(selectRestaurantById(restaurantId));
    const dishes = useSelector(selectDishes);

    useEffect(() => {
        dispatch(fetchDishes(restaurantId));
    }, [dispatch, restaurantId]);

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
            onPress={() =>
                navigation.navigate('Item Details', {
                    itemName: item.name,
                    restaurantId,
                    dishId: item.id,
                })
            }
        >
            <MenuItem item={item} />
        </TouchableOpacity>
    );

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={renderHeader}
            data={dishes}
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
