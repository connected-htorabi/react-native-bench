import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import Icon from 'react-native-vector-icons/FontAwesome';

import { removeItem } from '../../../redux/cart/cartSlice';
import OrderItem, { OrderItemPropTypes } from './OrderItem';
import { DefaultItemSeparator } from '../../common/Separator';

const DELETION_WIDTH = 80;

const renderHiddenItem = (onDelete) => (
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

const OrderSection = ({ items }) => {
    const dispatch = useDispatch();

    return (
        <SwipeListView
            data={items}
            renderItem={({ item }) => <OrderItem {...item} />}
            renderHiddenItem={({ item }) =>
                renderHiddenItem(() => dispatch(removeItem(item.id)))
            }
            ItemSeparatorComponent={DefaultItemSeparator}
            rightOpenValue={-DELETION_WIDTH}
            style={{ flexGrow: 0 }}
            disableRightSwipe
            scrollEnabled={false}
        />
    );
};

OrderSection.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(OrderItemPropTypes)),
};

export default OrderSection;
