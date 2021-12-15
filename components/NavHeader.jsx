import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HeaderLeft = ({ navigation }) => (
    <View>
        <Ionicons
            name="menu"
            onPress={() => navigation.openDrawer()}
            size={40}
        />
    </View>
);

export const HeaderRight = ({ navigation }) => (
    <View style={rightStyles.container}>
        <Ionicons
            name="cart-outline"
            onPress={() => navigation.navigate('Cart')}
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
