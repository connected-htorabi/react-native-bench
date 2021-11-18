import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

import ImageHeader from '../components/ImageHeader';
import { CONTAINER_PADDING } from '../constants';

const testData = [
    {
        id: 1,
        sectionName: 'Choice of Size',
        data: ['Regular', 'Deluxe'],
    },
    {
        id: 2,
        sectionName: 'Choice of Cheese',
        data: [
            'American Cheese',
            'Swiss Cheese',
            'Cheddar Cheese',
            'Mozarella Cheese',
        ],
    },
    {
        id: 3,
        sectionName: 'Choice of Add ons',
        data: ['Raw onions', 'Fried onions'],
    },
];

const ItemDetails = ({ route }) => {
    const { item: menuItem } = route.params;

    const renderHeader = () => (
        <ImageHeader
            style={{ marginBottom: 10 }}
            imageUrl={menuItem.image_url}
            parentPadding={CONTAINER_PADDING}
        />
    );

    return (
        <SectionList
            style={styles.container}
            ListHeaderComponent={renderHeader}
            sections={testData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Text>{item}</Text>}
            renderSectionHeader={({ section }) => (
                <Text>{section.sectionName}</Text>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: CONTAINER_PADDING,
    },
});

export default ItemDetails;
