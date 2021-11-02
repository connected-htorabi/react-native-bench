import { useState, useCallback, useMemo } from "react";

const useExpand = () => {
  const [expanded, setExpanded] = useState(false);
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

export default useExpand;
