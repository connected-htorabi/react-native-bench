import React from 'react';
import { View, Text, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/users/selectors';

const CustomDrawerNav = (props) => {
    const user = useSelector(selectUser);

    return (
        <View
            style={{
                flex: 1,
                borderBottomColor: '#995d9a',
                borderBottomWidth: 0.5,
            }}
        >
            <DrawerContentScrollView {...props}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYo2yKCLQmnzoC9UZxuXzkjBMZCNtvSt_0A&usqp=CAU',
                        }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 60,
                            marginBottom: 10,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                            alignContent: 'center',
                            marginTop: 30,
                            marginRight: 40,
                        }}
                    >
                        Hi {user.name}!
                    </Text>
                </View>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
};
export default CustomDrawerNav;
