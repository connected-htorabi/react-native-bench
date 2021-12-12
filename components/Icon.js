import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ExpandableContext } from './Expandable';

const Icon = ({ children, ...otherProps }) => {
    const { expanded } = useContext(ExpandableContext);

    return (
        <Text style={{ fontSize: 21, fontWeight: 'bold' }} {...otherProps}>
            {expanded ? '-' : '+'}
        </Text>
    );
};

export default Icon;
