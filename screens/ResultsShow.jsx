import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import RestaurantItem from '../components/RestaurantItem';

const ResultsShow = ({ navigation, route }) => {
    const { category } = route.params;
    const arr = route.params.results;

    const result = getAllIndexes(arr, category);

    const renderItem = ({ item }) => {
        return (
            <RestaurantItem
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                rating={item.rating}
                numReviews={item.numReviews}
                deliveryTime={item.deliveryTime}
                onPress={() =>
                    navigation.navigate('Restaurant Details', {
                        id: item.id,
                    })
                }
            />
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <FlatList
                data={result}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

const getAllIndexes = (arr, val) => {
    return arr.filter((item) => item.category === val);
};

export default ResultsShow;
