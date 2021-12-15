import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';

import { fetchRestaurants } from './redux/thunks/fetchRestaurants';
import { fetchUsers } from './redux/thunks/fetchUsers';
import AppStack from './navigation/Home/AppStack';
import { useGetUserQuery } from './redux/services/restaurant';

const App = () => {
    const dispatch = useDispatch();
    useGetUserQuery(1);

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchRestaurants());
    }, [dispatch]);

    return (
        <NavigationContainer>
            <Host>
                <AppStack />
            </Host>
        </NavigationContainer>
    );
};

export default App;
