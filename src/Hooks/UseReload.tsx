import { useState, useEffect } from 'react';

const useReload = (Layoutwidth): number | undefined => {
  let [width, setWidth] = useState(Layoutwidth);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(Layoutwidth()), 80);
      location.reload();
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
};

export default useReload;
