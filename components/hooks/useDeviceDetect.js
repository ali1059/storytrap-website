import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useDeviceDetect = () => {
  const [mounted, setMounted] = useState(false);
  const value = useMediaQuery({ query: "(max-width:768px)" });

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? value : null;
};

export default useDeviceDetect;
