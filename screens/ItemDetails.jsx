import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import ImageHeader from '../components/ImageHeader';
import DetailsHeader from '../components/DetailsHeader';
import { itemOptions } from '../constants';

const Header = ({ name, imageUrl, description }) => (
    <>
        <ImageHeader imageUrl={imageUrl} />
        <View style={styles.detailsContainer}>
            <DetailsHeader title={name} />
            <Text>{description}</Text>
        </View>
    </>
);

const renderSectionHeader = ({ section: { sectionName } }) => (
    <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>{sectionName}</Text>
    </View>
);

const renderSectionItem = ({ item }) => (
    <View style={styles.optionContainer}>
        <CheckBox
            disabled={false}
            boxType="square"
            value
            onValueChange={(newValue) => console.log('checked')}
        />
        <Text style={styles.optionName}>{item}</Text>
    </View>
);

const renderItemSeparator = () => <View style={styles.itemSeparator} />;

const ItemDetails = ({ route }) => {
    const { item: details } = route.params;

    return (
        <SectionList
            style={styles.container}
            ListHeaderComponent={
                <Header
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
        />
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
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
});

export default ItemDetails;
