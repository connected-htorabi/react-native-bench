import React from 'react';
import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    FlatList,
    Dimensions,
} from 'react-native';
import MenuItem from '../components/MenuItem';
import RestaurantInfo from '../components/RestaurantInfo';
import { localRestaurants } from '../constants';

const CONTAINER_PADDING = 20;

const items = [
    {
        id: 1,
        name: 'Double-Smoked Bacon, Cheddar & Egg Sandwich',
        price: 6.25,
        calories: 500,
        description:
            'Bacon smoked for six hours over hickory wood chips, stacked with something',
        image_url:
            'https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg',

        tags: ['Popular'],
    },
    {
        id: 2,
        name: 'Everything Croissant & Roasted Ham Sandwich',
        price: 6.25,
        calories: 500,
        description:
            'Bacon smoked for six hours over hickory wood chips, stacked with something',
        image_url:
            'https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg',

        tags: [],
    },
    {
        id: 3,
        name: 'Mango Dragonfruit Lemonade',
        price: 6.25,
        calories: 500,
        description:
            'Bacon smoked for six hours over hickory wood chips, stacked with something',
        image_url:
            'https://d1ralsognjng37.cloudfront.net/d03651d4-988d-4cf9-b101-29e49b50ea08.jpeg',

        tags: [],
    },
];

export default function RestaurantDetails({ route }) {
    const restaurantDetails = localRestaurants.find(
        (item) => item.id === route.params.id
    );

    const renderHeader = () => (
        <>
            <Image
                resizeMode="cover"
                style={styles.headerImage}
                source={{ uri: restaurantDetails.image_url }}
            />
            <RestaurantInfo info={restaurantDetails} />
            <Text style={styles.subHeader}>Picked for you</Text>
        </>
    );

    const renderItem = ({ item }) => <MenuItem item={item} />;

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={renderHeader}
            data={items}
            renderItem={renderItem}
        />
    );
}

const styles = StyleSheet.create({
    headerImage: {
        // TODO: Find a better way to do this
        left: -CONTAINER_PADDING,
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width,
    },
    container: {
        paddingHorizontal: 20,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 25,
    },
});
