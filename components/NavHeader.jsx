import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HeaderLeft = () => {
    const navigation = useNavigation();

    return (
        <Ionicons
            name="menu"
            onPress={() => navigation.openDrawer()}
            size={40}
        />
    );
};

export const HeaderRight = () => {
    const navigation = useNavigation();

    return (
        <Ionicons
            name="cart-outline"
            onPress={() => navigation.navigate('Cart')}
            size={30}
        />
    );
};
