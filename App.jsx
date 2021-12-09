import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Host } from 'react-native-portalize';

import { fetchRestaurants } from './redux/thunks/fetchRestaurants';
import { store } from './redux/store';
import AppStack from './navigation/Home/AppStack';
import { fetchUser } from './redux/thunks/fetchUser';
import { useGetUserQuery } from './redux/services/restaurant';

const Tab = createBottomTabNavigator();

const IconMapping = {
    Grocery: 'basket',
    Home: 'home',
    Browse: 'text-search',
    Orders: 'receipt',
    Account: 'account',
};

const App = () => {
    const dispatch = useDispatch();
    useGetUserQuery(1);

    useEffect(() => {
        dispatch(fetchRestaurants());
        dispatch(fetchUser(1));
    }, [dispatch]);

    return (
        <NavigationContainer>
            <Host>
                <AppStack />
                {/* <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => {
          return {
            tabBarActiveTintColor: "black",
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name={IconMapping[route.name]}
                color={color}
                size={size}
              />
            ),
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Browse" component={() => <Text>Browse</Text>} />
        <Tab.Screen name="Grocery" component={() => <Text>Grocery</Text>} />
        <Tab.Screen name="Orders" component={() => <Text>Orders</Text>} />
        <Tab.Screen name="Account" component={() => <Text>Account</Text>} />
      </Tab.Navigator> */}
            </Host>
        </NavigationContainer>
    );
};

export default App;
