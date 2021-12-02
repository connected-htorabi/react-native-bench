import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';

import RestaurantItem from '../components/RestaurantItem';
import { selectRestaurants } from '../redux/restaurants/selectors';

const Home = ({ navigation }) => {
    const restaurants = useSelector(selectRestaurants);

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <FlatList
                keyExtractor={({ id }) => id}
                data={restaurants}
                renderItem={({ item }) => (
                    <RestaurantItem
                        name={item.name}
                        imageUrl={item.imageUrl}
                        rating={item.rating}
                        onPress={() =>
                            navigation.navigate('Restaurant Details', {
                                id: item.id,
                            })
                        }
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default Home;
