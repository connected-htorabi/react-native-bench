import { useContext } from 'react';

import { ExpandableContext } from './Expandable';

const Body = ({ children }) => {
    const { expanded } = useContext(ExpandableContext);

    return expanded ? children : null;
};

export default Body;
