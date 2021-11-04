import { useState, useCallback, useMemo } from "react";

const useExpanded = () => {
  // const [expanded, setExpanded] = useState(false);
  // TODO - remove due to testing purposes
  const [expanded, setExpanded] = useState(true);
  const toggle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      expanded,
      toggle,
    }),
    [expanded, toggle]
  );

  return value;
};

export default useExpanded;
