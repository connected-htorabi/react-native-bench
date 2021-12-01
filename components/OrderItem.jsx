import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';

const OrderItem = ({ order }) => {
    const { name, image_url, price, items, date } = order;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image_url }} />
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    padding: 5,
                    paddingTop: 10,
                }}
            >
                {name}
            </Text>

            <Text
                style={{
                    fontSize: 13,
                    padding: 5,
                    paddingTop: 5,
                }}
            >
                {date}
            </Text>
            {items.map((item) => (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 5,
                        paddingTop: 5,
                        borderBottomWidth: 1,
                        borderBottomColor: '#eee',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 13,
                            marginRight: 5,
                        }}
                    >
                        1
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                        }}
                    >
                        {item}
                    </Text>
                </View>
            ))}
            <View
                style={{
                    justifyContent: 'space-between',
                    backgroundColor: '#fff',
                    padding: 5,
                    marginTop: 5,
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderBottomColor: '#eee',
                }}
            >
                <Text style={{ fontSize: 15 }}>Total: {price}</Text>
                <Pressable
                    style={{
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <Text
                        style={{
                            backgroundColor: '#4BAA00',
                            padding: 5,
                            marginBottom: 10,
                            color: '#fff',
                        }}
                    >
                        REORDER
                    </Text>
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
        paddingBottom: 165,
    },
    image: {
        height: '100%',
        borderTopWidth: 2,
        borderTopColor: '#eee',
    },
});

export default OrderItem;
