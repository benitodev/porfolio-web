import { useEffect, useRef, useState } from 'react';

const useObserver = (options: object) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) observer.disconnect();
    };
  }, [elementRef, options]);
  return { elementRef, isVisible };
};

export default useObserver;
