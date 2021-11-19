import React, { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BaseCardItem from './BaseCardItem';

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
                <Pressable onPress={() => setSelectedId(index)}>
                    <BaseCardItem {...item}>
                        {index === selectedId && (
                            <Icon name="check" color="green" />
                        )}
                    </BaseCardItem>
                </Pressable>
            )}
            keyExtractor={(_, i) => i}
        />
    );
};

export default CardList;
