import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Modalize } from 'react-native-modalize';

import BaseCardItem from './BaseCardItem';
import CardList from './CardList';

const dummyData = { type: 'visa', cardNumber: '****-****-1234' };

const CardSection = () => {
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
            <Modalize ref={modalizeRef} modalHeight={400} modalTopOffset={50}>
                <CardList />
            </Modalize>
        </>
    );
};

CardSection.propTypes = {};

const styles = StyleSheet.create({
    change: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default CardSection;
