import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import Icon from 'react-native-vector-icons/FontAwesome';

import OrderItem from './OrderItem';
import ItemSeparator from '../ItemSeparator';
// import { removeItemFromCart } from '../../../redux/thunks/removeItemFromCart';
import {
    useGetCartQuery,
    useRemoveItemFromCartMutation,
    restaurantApi,
} from '../../../redux/services/restaurant';
import { selectItems } from '../../../redux/cart/selectors';

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
    // const items = useSelector(selectItems);
    // const { data: items } = useGetCartQuery();
    // const { data: items } = useGetCartQuery();
    const { items } = useGetCartQuery(undefined, {
        selectFromResult: ({ data }) => ({ items: data }),
    });
    const [removeItemFromCart] = useRemoveItemFromCartMutation();

    return (
        <SwipeListView
            data={items}
            renderItem={({ item }) => <OrderItem {...item} />}
            renderHiddenItem={({ item }) =>
                renderHiddenItem(item, () =>
                    // dispatch(removeItemFromCart(item.id))
                    removeItemFromCart(item.id)
                )
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
