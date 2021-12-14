import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigator from './TabNavigator';
import Wallet from '../../screens/Wallet';
import Help from '../../screens/Help';
import Promotions from '../../screens/Promotions';
import Gift from '../../screens/Gift';
import CustomDrawerNav from '../../components/CustomDrawerNav';
import Favourites from '../../screens/Favourites';

const Drawer = createDrawerNavigator();

const IconMapping = {
    Drawer: 'shield',
    Favorites: 'heart',
    Wallet: 'credit-card',
    Help: 'lifebuoy',
    Promotions: 'tag',
    Gift: 'gift',
};
const AppStack = () => (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerNav {...props} />}
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            headerShown: false,
            drawerActiveBackgroundColor: '#3CB371',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerItemStyle: {
                borderBottomColor: '#995d9a',
                borderBottomWidth: 0.3,
            },
            drawerIcon: ({ size }) => (
                <MaterialCommunityIcons
                    name={IconMapping[route.name]}
                    size={size}
                />
            ),
        })}
        style={{ borderBottomColor: '#995d9a', borderBottomWidth: 0.3 }}
    >
        <Drawer.Screen name="Drawer" component={TabNavigator} />
        <Drawer.Screen name="Favorites" component={Favourites} />
        <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Promotions" component={Promotions} />
        <Drawer.Screen name="Gift" component={Gift} />
    </Drawer.Navigator>
);

export default AppStack;
