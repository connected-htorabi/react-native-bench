import React, { createContext,useState,useCallback,useMemo,useEffect, useRef} from "react";

export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;
const Expandable = ({ children, onExpanded }) => {

   const [expanded, setExpanded] = useState(false);
   const componentJustMounted = useRef(true);
   useEffect(()=>{
    if(!componentJustMounted){
    onExpanded(expanded);
    }
    componentJustMounted.current = false;
   },[expanded])
   const toggle = useCallback ( () => setExpanded(prevExpanded =>!prevExpanded) ,[]);
   const value = useMemo(()=>({expanded, toggle}),[expanded,toggle])
    return(
    <Provider value={value}>{children}</Provider>
    );
}

export default Expandable;