import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import OrderItem, { OrderItemPropTypes } from './OrderItem';
import ItemSeparator from '../ItemSeparator';

const OrderSection = ({ items = [] }) => (
    <>
        <FlatList
            data={items}
            renderItem={({ item }) => <OrderItem {...item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeparator}
            scrollEnabled={false}
            // TODO - figure out why this is required
            style={{ flexGrow: 0 }}
        />
        <SwipeListView
            data={items}
            renderItem={({ item }) => <OrderItem {...item} />}
            renderHiddenItem={({ item }) => (
                <Text style={{ textAlign: 'right' }}>Hello there</Text>
            )}
            rightOpenValue={-20}
        />
    </>
);

OrderSection.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(OrderItemPropTypes)),
};

export default OrderSection;
