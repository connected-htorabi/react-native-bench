import React from 'react';
import { useNavigation } from '@react-navigation/native'; // not sure package name

export const withNavigation = (Component) => {
    return (props) => {
        const navigation = useNavigation();

        return <Component navigation={navigation} {...props} />;
    };
};
