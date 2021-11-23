import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, Pressable } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import Icon from 'react-native-vector-icons/FontAwesome';

import BaseCardItem from './BaseCardItem';

const dummyData2 = [
    { type: 'visa', cardNumber: '****-****-1234' },
    { type: 'mastercard', cardNumber: '****-****-1234' },
    { type: 'amex', cardNumber: '****-****-1234' },
];

const dummyData = { type: 'visa', cardNumber: '****-****-1234' };

const CardSection = () => {
    const [selectedId, setSelectedId] = useState(0);
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableHighlight onPress={onOpen}>
                <BaseCardItem
                    type={dummyData.type}
                    cardNumber={dummyData.cardNumber}
                    isList={false}
                >
                    <Text style={styles.change}>Change</Text>
                </BaseCardItem>
            </TouchableHighlight>
            <Portal>
                <Modalize
                    ref={modalizeRef}
                    modalHeight={300}
                    flatListProps={{
                        data: dummyData2,
                        renderItem: ({ item, index }) => (
                            <Pressable onPress={() => setSelectedId(index)}>
                                <BaseCardItem {...item}>
                                    {index === selectedId && (
                                        <Icon name="check" color="green" />
                                    )}
                                </BaseCardItem>
                            </Pressable>
                        ),
                        keyExtractor: (_, i) => i,
                        contentContainerStyle: {
                            width: '100%',
                            height: '100%',
                        },
                    }}
                />
            </Portal>
        </>
    );
};

const styles = StyleSheet.create({
    change: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default CardSection;
