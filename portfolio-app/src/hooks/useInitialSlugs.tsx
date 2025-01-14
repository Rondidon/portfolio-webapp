import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useInitialSlugs() {
  const location = useLocation();
  return useMemo(() => {
    const path = location.pathname;
    let result = ["global-layout"];
    if (path === "/not-found-404") {
      result.push("not-found-404");
    }
    return result;
  }, [location]);
}

export default useInitialSlugs;
