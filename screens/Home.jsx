import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';

import RestaurantItem from '../components/RestaurantItem';
import { selectRestaurants } from '../redux/restaurants/selectors';
import Separator from '../components/common/Separator';

const ItemSeparator = () => <Separator marginVertical={5} />;

const Home = ({ navigation }) => {
    const restaurants = useSelector(selectRestaurants);

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <FlatList
                keyExtractor={({ id }) => id}
                data={restaurants}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => (
                    <RestaurantItem
                        name={item.name}
                        imageUrl={item.imageUrl}
                        rating={item.rating}
                        deliveryTime={item.deliveryTime}
                        price={item.price}
                        numReviews={item.numReviews}
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
