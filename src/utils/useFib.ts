import { useMemo, useCallback } from 'react';

// Custom hook for Fibonacci calculation with memoized cached result
const useFib = () => {
  // Memoize the memo Map so it persists across re-renders
  const memo = useMemo(() => new Map<number, number>(), []);
  // Memoize the Fibonacci function
  const fib = useCallback(
    (n: number): number => {
      if (n <= 1) return n;
      if (memo.has(n)) return memo.get(n)!;
      const result: number = fib(n - 1) + fib(n - 2);
      memo.set(n, result);
      return result;
    },
    [memo]
  );
  // Return the memoized Fibonacci function
  return fib;
};

export default useFib;
