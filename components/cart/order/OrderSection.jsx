import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import Icon from 'react-native-vector-icons/FontAwesome';

import OrderItem from './OrderItem';
import ItemSeparator from '../ItemSeparator';
import {
    useGetCartQuery,
    useRemoveItemFromCartMutation,
} from '../../../redux/services/restaurant';

const DELETION_WIDTH = 80;

const renderHiddenItem = (item, onDelete) => (
    <View style={styles.container}>
        <Icon
            onPress={onDelete}
            name="trash"
            color="red"
            size={30}
            style={styles.icon}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'flex-end',
    },
    icon: {
        width: DELETION_WIDTH,
        textAlign: 'center',
        alignSelf: 'center',
    },
});

const OrderSection = () => {
    const { items } = useGetCartQuery(undefined, {
        selectFromResult: ({ data }) => ({ items: data }),
    });
    const [removeItemFromCart] = useRemoveItemFromCartMutation();

    return (
        <SwipeListView
            data={items}
            renderItem={({ item }) => <OrderItem {...item} />}
            renderHiddenItem={({ item }) =>
                renderHiddenItem(item, () => removeItemFromCart(item.id))
            }
            ItemSeparatorComponent={ItemSeparator}
            rightOpenValue={-DELETION_WIDTH}
            style={{ flexGrow: 0 }}
            disableRightSwipe
            scrollEnabled={false}
        />
    );
};

export default OrderSection;
