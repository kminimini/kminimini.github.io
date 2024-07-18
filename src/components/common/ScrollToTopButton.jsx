import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '../../styles/components/common/TopButton.styles'

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!show && window.scrollY > 400) {
      setShow(true);
    } else if (show && window.scrollY <= 400) {
      setShow(false);
    }
  }, [show]);

  useEffect(() => {
    const throttle = (func, limit) => {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    }

    const throttledCheckScrollTop = throttle(checkScrollTop, 200);

    window.addEventListener('scroll', throttledCheckScrollTop);
    return () => window.removeEventListener('scroll', throttledCheckScrollTop);
  }, [checkScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button show={show} onClick={scrollToTop}>
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;