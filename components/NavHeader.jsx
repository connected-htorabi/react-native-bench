import React from 'react';
import { View } from 'react-native';
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

// marginLeft added to to issue with ReactNavigation screens
// https://github.com/software-mansion/react-native-screens/issues/619
export const TempHeaderLeft = () => {
    const navigation = useNavigation();

    return (
        <View style={{ marginLeft: -16 }}>
            <Ionicons
                name="menu"
                onPress={() => navigation.openDrawer()}
                size={40}
            />
        </View>
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
