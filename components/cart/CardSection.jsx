import React, { useRef } from 'react';
import {
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { Modalize } from 'react-native-modalize';

import CardItem from './CardItem';
import CardList from './CardList';

const dummyData = { type: 'visa', cardNumber: '****-****-1234' };

const CardSection = () => {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableHighlight onPressIn={onOpen} onPress={() => alert('hey')}>
                <CardItem
                    type={dummyData.type}
                    cardNumber={dummyData.cardNumber}
                    isList={false}
                />
            </TouchableHighlight>
            <Modalize ref={modalizeRef} modalHeight={400} modalTopOffset={50}>
                <CardList />
            </Modalize>
        </>
    );
};

CardSection.propTypes = {};

export default CardSection;
