import React, { useState, useMemo } from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { clone } from 'lodash';

import { selectDishById } from '../redux/menu/selectors';
import {
    selectRestaurantId,
    selectNumCartItems,
} from '../redux/cart/selectors';
import { addItem } from '../redux/cart/cartSlice';
import ListHeader from '../components/itemDetails/ListHeader';
import QuantityControl from '../components/itemDetails/QuantityControl';
import { itemOptions } from '../constants';

const MINIMUM_QUANTITY = 1;

const renderSectionHeader = ({ section: { sectionName, isMultiSelect } }) => (
    <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>
            {sectionName} {!isMultiSelect && '(Select 1)'}
        </Text>
    </View>
);

const renderSectionItem = ({ item }) => (
    <View style={styles.optionContainer}>
        <Checkbox
            disabled={false}
            value={false}
            onValueChange={(newValue) => console.log('checked')}
        />
        <Text style={styles.optionName}>{item}</Text>
    </View>
);

const renderItemSeparator = () => <View style={styles.itemSeparator} />;

const ItemDetails = ({ route }) => {
    const { dishId, restaurantId } = route.params;
    const currentCartRestaurantId = useSelector(selectRestaurantId);
    const numCartItems = useSelector(selectNumCartItems);
    const dishDetails = useSelector(selectDishById(dishId));
    const [sectionData, setSectionData] = useState(() =>
        itemOptions.reduce((accSection, currSection) => {
            accSection[currSection.id] = {
                isMultiSelect: currSection.isMultiSelect,
                data: currSection.data.reduce((accItem, currItem) => {
                    const name = currItem;
                    const value = false;
                    accItem[name] = value;
                    return accItem;
                }, {}),
            };
            return accSection;
        }, {})
    );
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const dispatchAddItem = () =>
        dispatch(
            addItem({
                id: dishId,
                restaurantId,
                quantity,
                name: dishDetails.name,
                description: dishDetails.description,
                price: dishDetails.price,
            })
        );

    const showAlert = () =>
        Alert.alert(
            'Replace cart contents',
            'You are attempting to add an item from a new restaurant. Your current cart contents will be replaced. Continue?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => dispatchAddItem() },
            ]
        );

    const addItemToCart = () => {
        if (restaurantId !== currentCartRestaurantId && numCartItems) {
            showAlert();
        } else {
            dispatchAddItem();
        }
    };

    // TODO: Implement onChange
    const onChange = (sectionId, itemId) => {
        const newSectionData = clone(sectionData);
        const { isMultiSelect } = newSectionData[sectionId];
        const name = itemId;
        const value = newSectionData[sectionId].data[name];

        if (!isMultiSelect) {
            const keys = Object.keys(newSectionData[sectionId].data);
            keys.forEach((key) => {
                newSectionData[sectionId].data[key] = false;
            });
        }
        newSectionData[sectionId].data[name] = !value;
        setSectionData(newSectionData);
    };

    return (
        <>
            <SectionList
                style={styles.container}
                ListHeaderComponent={
                    <ListHeader
                        name={dishDetails.name}
                        description={dishDetails.description}
                        imageUrl={dishDetails.imageUrl}
                    />
                }
                sections={sectionData}
                keyExtractor={(item, index) => item + index}
                renderItem={renderSectionItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={renderItemSeparator}
                ListFooterComponent={
                    <QuantityControl
                        quantity={quantity}
                        onIncrement={() => setQuantity((prev) => prev + 1)}
                        onDecrement={() =>
                            setQuantity((prev) =>
                                prev > MINIMUM_QUANTITY ? prev - 1 : prev
                            )
                        }
                    />
                }
            />
            <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addItemToCart({ id: dishId, quantity })}
            >
                <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '90%',
        marginBottom: 10,
    },
    sectionHeaderContainer: {
        justifyContent: 'center',
        width: '100%',
        height: 50,
        fontSize: 30,
        paddingHorizontal: 20,
        backgroundColor: '#dedede',
    },
    sectionHeaderText: {
        fontSize: 18,
    },
    sectionSeparator: {
        height: 10,
    },
    itemSeparator: {
        height: 1,
        backgroundColor: '#dedede',
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    optionName: {
        marginLeft: 20,
    },
    addToCartButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: 50,
        width: '90%',
        backgroundColor: 'black',
        color: 'white',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ItemDetails;
