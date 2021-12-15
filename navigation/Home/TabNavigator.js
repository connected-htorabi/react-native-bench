import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Browse from '../../screens/Browse';
import { HomeStack } from './HomeStack';
import OrdersScreen from '../../screens/OrdersScreen';
import AccountScreen from '../../screens/AccountScreen';
import Browse from '../../screens/Browse';
import { HeaderLeft } from '../../components/NavHeader';

const Tab = createBottomTabNavigator();

const IconMapping = {
    Grocery: 'basket',
    Home: 'home',
    Browse: 'text-search',
    Orders: 'receipt',
    Account: 'account',
};

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'black',
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                    name={IconMapping[route.name]}
                    color={color}
                    size={size}
                />
            ),
        })}
    >
        <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Browse"
            component={Browse}
            options={({ navigation }) => ({
                headerLeft: () => <HeaderLeft navigation={navigation} />,
            })}
        />
        <Tab.Screen
            name="Orders"
            component={OrdersScreen}
            options={({ navigation }) => ({
                headerLeft: () => <HeaderLeft navigation={navigation} />,
            })}
        />
        <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={({ navigation }) => ({
                headerLeft: () => <HeaderLeft navigation={navigation} />,
            })}
        />
    </Tab.Navigator>
);
export default TabNavigator;
