import { useState, useEffect, useRef } from 'react';

function useIncrementingNumber(delay) {
  const [count, setCount] = useState(0);

  // Change count state and assign it to useRef
  const savedCallback = useRef(() => setCount(c => c + 1));

  // Set up the interval
  useEffect(() => {

    function tick() {
      // Call the stored function from useRef
      savedCallback.current();
    }

    if (delay !== null) {
      // Repeatedly call a function with a time delay between each call
      let id = setInterval(tick, delay);
      // Every time after function calling we clear intervalID from above
      return () => clearInterval(id);
    }

  }, [delay]);

  return count;
}

export default useIncrementingNumber;