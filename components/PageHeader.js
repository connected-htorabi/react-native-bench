import React from 'react';
import { StyleSheet, View, Text, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStack from '../navigation/Home/AppStack';

export var PageHeader = ({ title, navigation }) => (
    <View
        style={{
            backgroundColor: 'white',
            padding: 1,
            flexDirection: 'row',
            width:Dimensions.get('window').width,
            alignSelf: 'stretch',
        }}
    >
        <Ionicons
            name="menu"
            onPress={() => navigation.openDrawer()}
            size={40}
        />

        <Text style={{ paddingLeft: 100, fontWeight: 'bold', fontSize: 22 }}>
            {title}
        </Text>
    </View>
);
