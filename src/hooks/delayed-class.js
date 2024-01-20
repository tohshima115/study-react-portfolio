import { useEffect, useState } from 'react';

function useDelayed(delay) {
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveClass(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return activeClass;
}

export default useDelayed;