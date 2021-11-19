import React, { useState } from 'react';
import { FlatList } from 'react-native';

import CardItem from './CardItem';

const dummyData = [
    { type: 'visa', cardNumber: '****-****-1234' },
    { type: 'mastercard', cardNumber: '****-****-1234' },
    { type: 'amex', cardNumber: '****-****-1234' },
];

const CardList = () => {
    const [selectedId, setSelectedId] = useState(0);
    return (
        <FlatList
            data={dummyData}
            renderItem={({ item, index }) => (
                <CardItem
                    {...item}
                    isSelected={index === selectedId}
                    onClick={() => setSelectedId(index)}
                />
            )}
            keyExtractor={(_, i) => i}
        />
    );
};

export default CardList;
