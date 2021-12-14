import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
    deliveryTime: PropTypes.string.isRequired,
};

const RestaurantItem = ({
    imageUrl,
    name,
    rating,
    onPress,
    price,
    deliveryTime,
}) => (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={{ padding: 15, backgroundColor: 'white' }}>
            <RestaurantImage image={imageUrl} />
            <RestaurantInfo
                name={name}
                rating={rating}
                price={price}
                deliveryTime={deliveryTime}
            />
        </View>
    </TouchableOpacity>
);

RestaurantItem.propTypes = propTypes;

export default RestaurantItem;

const RestaurantImage = ({ image }) => (
    <>
        <Image
            source={{
                uri: image,
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
RestaurantImage.propTypes = {
    image: propTypes.imageUrl,
};

const RestaurantInfo = ({ name, deliveryTime, price, rating }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
            <Text
                style={{
                    fontSize: 13,
                    color: 'grey',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {' '}
                <MaterialCommunityIcons
                    name="ticket-confirmation"
                    size={15}
                    color="green"
                />{' '}
                • ${price} Delivery Fee • {deliveryTime}
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
            <Text style={{ fontWeight: 'bold' }}>{rating}</Text>
        </View>
    </View>
);

RestaurantInfo.propTypes = {
    rating: propTypes.rating,
    name: propTypes.name,
    price: propTypes.price,
    deliveryTime: propTypes.deliveryTime,
};
