import React from 'react';

import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const CategoryItem = ({ image, title, id, onPress }) => {
    return (
        <TouchableOpacity
            key={id}
            activeOpacity={0.5}
            style={{
                marginBottom: 8,
                marginTop: 8,
                paddingLeft: 8,
                paddingRight: 8,
                width: '50%',
            }}
            onPress={onPress}
        >
            <View
                style={{
                    borderRadius: 8,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ImageBackground
                    imageStyle={{ opacity: 0.5 }}
                    source={{ uri: image }}
                    style={{
                        backgroundColor: 'black',
                        width: '100%',
                        height: 160,
                    }}
                />

                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        numberOfLines={2}
                        style={{
                            fontWeight: 'bold',
                            color: 'white',
                            position: 'absolute',
                            marginTop: 50,
                            alignSelf: 'center',
                            width: '75%',
                            textAlign: 'center',
                            zIndex: 20,
                        }}
                    >
                        {title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryItem;
