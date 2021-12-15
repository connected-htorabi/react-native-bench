import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RestaurantItem from './RestaurantItem';

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();

    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    if (item.price === '$') {
                        item.price = 1.0;
                    } else if (item.price === '$$') {
                        item.price = 2.0;
                    } else {
                        item.price = 3.0;
                    }
                    return (
                        <RestaurantItem
                            imageUrl={item.image_url}
                            name={item.name}
                            price={item.price}
                            numReviews={item.review_count}
                            rating={item.rating}
                            deliveryTime="10 - 15 min"
                            onPress={() => {}}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    },
});

export default ResultsList;
