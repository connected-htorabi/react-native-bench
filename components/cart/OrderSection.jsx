import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import OrderItem, { OrderItemPropTypes } from './OrderItem';
import ItemSeparator from './ItemSeparator';

const OrderSection = ({ items = [] }) => (
    <FlatList
        data={items}
        renderItem={({ item }) => <OrderItem {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
    />
);

OrderSection.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(OrderItemPropTypes)),
};

export default OrderSection;
