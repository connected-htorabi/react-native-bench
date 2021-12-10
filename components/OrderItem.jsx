import React from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { replaceCart } from '../redux/cart/cartSlice';

const OrderItem = ({ order }) => {
    const { name, restaurant, total, items, date } = order;
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onReorder = () => {
        dispatch(replaceCart(items));
        navigation.navigate('Cart');
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: restaurant.imageUrl }} />
            <Text style={styles.boldText}>{name}</Text>

            <Text style={styles.text}>
                {format(new Date(date), 'd MMM yyyy')}
            </Text>
            {items.map(({ id, name, quantity }) => (
                <View key={id} style={styles.rowContainer}>
                    <Text style={styles.text}>{quantity}</Text>
                    <Text style={styles.text}>{name}</Text>
                </View>
            ))}
            <View style={styles.totalRowContainer}>
                <Text style={styles.boldText}>Total: ${total}</Text>
                <TouchableOpacity onPress={onReorder}>
                    <Text style={styles.buttonText}>REORDER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        textAlign: 'left',
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    image: {
        height: 150,
    },
    text: {
        fontSize: 13,
        padding: 10,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    totalRowContainer: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 0,
        borderBottomWidth: 2,
        justifyContent: 'space-between',
        borderBottomColor: '#ddd',
    },
    buttonText: {
        backgroundColor: '#4BAA00',
        padding: 10,
        color: '#fff',
    },
});

export default OrderItem;
