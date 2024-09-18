import { useCallback } from 'react';

// custom hook for settimeout that returns a promise hence can be used with async/await syntax
const useDelay = () => {
  const delay = useCallback((time: number) => {
    return new Promise<void>((resolve) => setTimeout(resolve, time));
  }, []);

  return delay;
};

export default useDelay;
