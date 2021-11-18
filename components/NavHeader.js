import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStack from '../navigation/Home/AppStack';

export var HeaderLeft = ({ navigation }) => (
    <View>
        <Ionicons
            name="menu"
            onPress={() => navigation.openDrawer()}
            size={40}
        />
    </View>
);

export var HeaderRight = ({ navigation, route }) => (
    <View style={rightStyles.container}>
        <Ionicons
            name="wallet-outline"
            onPress={() => navigation.navigate('Wallet')}
            style={route.name === 'Wallet' && rightStyles.activeIcon}
            size={30}
        />
        <Ionicons
            name="cart-outline"
            onPress={() => navigation.navigate('Cart')}
            style={route.name === 'Cart' && rightStyles.activeIcon}
            size={30}
        />
    </View>
);

const rightStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    activeIcon: {
        color: 'blue',
    },
});
