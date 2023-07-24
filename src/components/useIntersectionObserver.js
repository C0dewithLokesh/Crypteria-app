import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useIntersectionObserver = (animationClass = '') => {
  const [isIntersecting, setIntersecting] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIntersecting(true);
    }
  }, [inView]);

  return [ref, isIntersecting, animationClass];
};

export default useIntersectionObserver;
