import React, { useState } from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import Checkbox from 'expo-checkbox';

import ListHeader from '../components/itemDetails/ListHeader';
import QuantityControl from '../components/itemDetails/QuantityControl';
import { itemOptions } from '../constants';

const MINIMUM_QUANTITY = 1;

const renderSectionHeader = ({ section: { sectionName } }) => (
    <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>{sectionName}</Text>
    </View>
);

const renderSectionItem = ({ item }) => (
    <View style={styles.optionContainer}>
        <Checkbox
            disabled={false}
            value
            onValueChange={(newValue) => console.log('checked')}
        />
        <Text style={styles.optionName}>{item}</Text>
    </View>
);

const renderItemSeparator = () => <View style={styles.itemSeparator} />;

const ItemDetails = ({ route }) => {
    const { item: details } = route.params;

    const [quantity, setQuantity] = useState(1);

    return (
        <SafeAreaView>
            <SectionList
                style={styles.container}
                ListHeaderComponent={
                    <ListHeader
                        name={details.name}
                        description={details.description}
                        imageUrl={details.image_url}
                    />
                }
                sections={itemOptions}
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
            <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
