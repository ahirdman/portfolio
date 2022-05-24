import { useState, useEffect } from 'react';

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return {
    width,
  };
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<any>();

  useEffect(() => {
    if (!window) return;
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
