import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import { meals } from '../components/CategoryData';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import CategoryItem from '../components/CategoryItem';
import { selectRestaurants } from '../redux/restaurants/selectors';

const Browse = ({ navigation }) => {
    const restaurants = useSelector(selectRestaurants);
    const [term, setTerm] = useState('');
    const [searchApi, results] = useResults();

    // price === '$' || '$$' || '$$$'
    const filterResultsByPrice = (price) =>
        results.filter((result) => result.price === price);

    return (
        <>
            <View
                style={{
                    marginTop: 2,
                    marginBottom: 1,
                    marginRight: 4,
                    position: 'relative',
                    justifyContent: 'center',
                }}
            >
                <Ionicons
                    name="search-sharp"
                    size={20}
                    color="black"
                    style={{
                        zIndex: 10,
                        position: 'absolute',
                        alignSelf: 'center',
                        left: 16,
                    }}
                />
                <TextInput
                    style={
                        (styles.input,
                        {
                            borderRadius: 10,
                            backgroundColor: '#C0C0C0',
                            paddingBottom: 8,
                            paddingTop: 8,
                            paddingLeft: 36,
                            paddingRight: 20,
                        })
                    }
                    value={term}
                    onChangeText={setTerm}
                    onEndEditing={() => searchApi(term)}
                    placeholder="Search anything"
                />
            </View>
            {!term ? (
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text
                        style={{ fontSize: 20, marginTop: 8, marginLeft: 16 }}
                    >
                        Top meals
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            marginLeft: 8,
                            marginRight: 8,
                        }}
                    >
                        {meals?.map(({ title, image, id }) => (
                            <CategoryItem
                                title={title}
                                image={image}
                                id={id}
                                onPress={() =>
                                    // TODO - remove 'results show' and show the 'category' as the header title
                                    navigation.navigate('Results Show', {
                                        category: title,
                                        results: restaurants,
                                    })
                                }
                            />
                        ))}
                    </View>
                </ScrollView>
            ) : (
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <ResultsList
                            results={filterResultsByPrice('$')}
                            title="$"
                        />
                        <ResultsList
                            results={filterResultsByPrice('$$')}
                            title="$$"
                        />
                        <ResultsList
                            results={filterResultsByPrice('$$$')}
                            title="$$$"
                        />
                    </View>
                </ScrollView>
            )}
        </>
    );
};

export default Browse;

const styles = StyleSheet.create({
    input: {
        borderColor: '#F3F3F3',
        borderWidth: 1,
    },
});
