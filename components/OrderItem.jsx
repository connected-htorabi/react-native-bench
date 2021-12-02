import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';

const OrderItem = ({ order }) => {
    const { name, image_url, price, items, date } = order;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image_url }} />
            <Text style={styles.boldText}>{name}</Text>

            <Text style={styles.text}>{date}</Text>
            {items.map((item) => (
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>1</Text>
                    <Text style={styles.text}>{item}</Text>
                </View>
            ))}
            <View style={styles.totalRowContainer}>
                <Text style={styles.boldText}>Total: {price}</Text>
                <Pressable>
                    <Text style={styles.buttonText}>REORDER</Text>
                </Pressable>
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
