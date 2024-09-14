import { useCallback } from 'react';

const useDelay = () => {
  const delay = useCallback((time: number) => {
    return new Promise<void>((resolve) => setTimeout(resolve, time));
  }, []);

  return delay;
};

export default useDelay;
