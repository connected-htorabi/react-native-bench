import React, {
    createContext,
    useState,
    useCallback,
    useMemo,
    useEffect,
    useRef,
} from 'react';
import { View } from 'react-native';

export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;
const Expandable = ({ children, onExpand, shouldExpand, ...otherProps }) => {
    const [expanded, setExpanded] = useState(false);
    const isExpandControlled = shouldExpand !== undefined;
    const componentJustMounted = useRef(true);

    useEffect(() => {
        if (!componentJustMounted && !isExpandControlled) {
            onExpand(expanded);
        }
        componentJustMounted.current = false;
    }, [expanded, isExpandControlled, onExpand]);

    const getState = isExpandControlled ? shouldExpand : expanded;
    const toggle = useCallback(
        () => setExpanded((prevExpanded) => !prevExpanded),
        []
    );
    const getToggle = isExpandControlled ? onExpand : toggle;
    const value = useMemo(
        () => ({ expanded: getState, toggle: getToggle }),
        [getState, getToggle]
    );

    return (
        <Provider value={value}>
            <View {...otherProps}>{children}</View>
        </Provider>
    );
};

export default Expandable;
