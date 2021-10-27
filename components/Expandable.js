import React, { createContext } from "react";

const ExpandableContext = createContext();
const { Provider } = ExpandableContext;
const Expandable = ({ children }) => <Provider>{children}</Provider>;

export default Expandable;
