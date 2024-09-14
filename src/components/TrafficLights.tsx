import { useState, useEffect, useCallback } from 'react';
import useFib from '../utils/useFib';
import './TrafficLights.css';
import useDelay from '../utils/useDelay';

const TrafficLights = ({ startValue }: { startValue: number }) => {
  const [currentValue, setCurrentValue] = useState(startValue); // current starting value
  const [calcState, setCalcState] = useState<
    'stopped' | 'calculating' | 'complete'
  >('stopped'); // for three traffic lights state
  const [fibResult, setFibResult] = useState<number | null>(null); // to store the fib result that will be shown on green light
  // initializing the use fib hook
  const fib = useFib();
  // hook for simulating calculation delay
  const delayCalculation = useDelay();

  /* main calculation function that adds a delay time to simulate 
  calculation to change states according to every state of calculation of each fib num*/
  const runCalculation = useCallback(async () => {
    if (currentValue < startValue + 10) {
      // Start with red light
      setCalcState('stopped');

      // Switch to yellow while calculating
      setCalcState('calculating');
      await delayCalculation(1000);

      // Calculate Fibonacci number using the hook
      const fibonacciValue = fib(currentValue);

      // Switch to green and show result
      setFibResult(fibonacciValue);
      setCalcState('complete');
      await delayCalculation(2000);

      // Move to next number keeping in mind the boundary does not exceed 10
      if (currentValue < startValue + 10) {
        setCurrentValue((prev) => prev + 1);
        console.log(currentValue);
      } else {
        setCalcState('stopped'); // Final state after all calculations
      }
    }
  }, [currentValue, startValue, delayCalculation, fib]);

  // running calc function
  useEffect(() => {
    runCalculation();
  }, [runCalculation]);

  return (
    <div className="traffic-light">
      <div className="light-container">
        <div
          className={`light red ${calcState === 'stopped' ? 'active' : ''}`}
        />
        <div
          className={`light yellow ${
            calcState === 'calculating' ? 'active' : ''
          }`}
        />
        <div
          className={`light green ${calcState === 'complete' ? 'active' : ''}`}
        >
          {calcState === 'complete' && (
            <div className="result">{fibResult}</div>
          )}
        </div>
      </div>
      <div className="fib-label">Fib({currentValue})</div>
    </div>
  );
};

export default TrafficLights;
