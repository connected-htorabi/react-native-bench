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

const Header = ({ restaurantDetails }) => (
    <>
        <ImageHeader
            imageUrl={restaurantDetails.imageUrl}
            parentPadding={CONTAINER_PADDING}
        />
        <RestaurantInfo info={restaurantDetails} />
        <Text style={styles.subHeader}>Picked for you</Text>
    </>
);

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <MenuItem item={item} />
    </TouchableOpacity>
);

const RestaurantDetails = ({ navigation, route }) => {
    const restaurantId = route.params.id;
    const dispatch = useDispatch();
    const restaurantDetails = useSelector(selectRestaurantById(restaurantId));
    const dishes = useSelector(selectDishes);

    useEffect(() => {
        dispatch(fetchDishes(restaurantId));
    }, [dispatch, restaurantId]);

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={
                <Header restaurantDetails={restaurantDetails} />
            }
            data={dishes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Item
                    item={item}
                    onPress={() =>
                        navigation.navigate('Item Details', {
                            itemName: item.name,
                            restaurantId,
                            dishId: item.id,
                        })
                    }
                />
            )}
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
