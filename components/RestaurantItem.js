import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItem({ image_url, name, rating, onPress }) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={{ marginBottom: 30 }}
            onPress={onPress}
        >
            <View
                style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
            >
                <RestaurantImage image={image_url} />
                <RestaurantInfo name={name} rating={rating} />
            </View>
        </TouchableOpacity>
    );
}
const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image,
            }}
            style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="#fff"
            />
        </TouchableOpacity>
    </>
);
const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 13, color: 'grey' }}>
                {' '}
                <MaterialCommunityIcons
                    name="ticket-confirmation"
                    size={15}
                    color="green"
                />{' '}
                • $0.99 Delivery Fee • 30-45 min
            </Text>
        </View>
        <View
            style={{
                backgroundColor: '#eee',
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
            }}
        >
            <Text style={{ fontWeight: 'bold' }}>{props.rating}</Text>
        </View>
    </View>
);
