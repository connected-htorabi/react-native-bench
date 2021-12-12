import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

const Separator = ({ marginVertical = 1 }) => (
    <View style={{ marginVertical }} />
);

Separator.propTypes = {
    marginVertical: PropTypes.number,
};
export default Separator;

export const DefaultItemSeparator = () => <Separator />;
export const DefaultSectionSeparator = () => <Separator marginVertical={5} />;
