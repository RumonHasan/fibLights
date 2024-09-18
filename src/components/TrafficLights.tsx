import { useState, useEffect, useCallback } from 'react';
import useFib from '../utils/useFib';
import './TrafficLights.css';
import useDelay from '../utils/useDelay';
import { CALC_CYCLES } from '../utils/data';

const TrafficLights = ({
  startValue,
  isCalculating,
  onStopCalculation,
}: {
  startValue: number;
  isCalculating: boolean;
  onStopCalculation: () => void;
}) => {
  const [currentValue, setCurrentValue] = useState(startValue); // current starting value
  const [calcState, setCalcState] = useState<
    'stopped' | 'calculating' | 'complete'
  >('stopped'); // for three traffic lights state
  const [fibResult, setFibResult] = useState<number | null>(null); // to store the fib result that will be shown on green light
  // custom hooks for calculating the fibonacci number and delaying calculation
  const fib = useFib();
  const delayCalculation = useDelay();

  // function to reset all calculation params after certain conditions are met
  const resetCalculations = useCallback(() => {
    setCurrentValue(startValue);
    setCalcState('stopped');
    setFibResult(null);
    onStopCalculation(); // for sending a stop calculation state as callback to parent component
  }, [onStopCalculation, startValue]);

  /* main calculation function that adds a delay time to simulate 
  calculation to change states according to every state of calculation of each fib num*/
  const runCalculation = useCallback(async () => {
    // while calculating switch back and forth between yellow and green lights
    if (currentValue <= startValue + CALC_CYCLES) {
      // Switch to yellow while calculating
      setCalcState('calculating');
      await delayCalculation(1000);
      // passing the value to the fib hook to calculate the fibonacci value
      const fibonacciValue = fib(currentValue);
      // Switch to green and show result
      setFibResult(fibonacciValue);
      setCalcState('complete');
      await delayCalculation(2000);
      // Move to next number keeping in mind the boundary does not exceed 10
      if (currentValue < startValue + CALC_CYCLES) {
        // CALC_CYCLES is 10 concurrent values starting from the starting value
        setCurrentValue((prev) => prev + 1);
      }
    } // when it hits the final value switch back to red
    if (currentValue === startValue + CALC_CYCLES) {
      resetCalculations();
    }
  }, [currentValue, startValue, delayCalculation, fib, resetCalculations]);

  // responsible for the lifecyle of the start/ reset of the calculation
  useEffect(() => {
    let calcMount = true;
    if (!isCalculating) {
      resetCalculations();
    }
    if (isCalculating && calcMount) {
      runCalculation();
    }
    return () => {
      calcMount = false;
    };
  }, [
    currentValue,
    isCalculating,
    resetCalculations,
    runCalculation,
    startValue,
  ]);
  // Dependencies:
  // - currentValue and startValue: to re-run effect if these values change
  // - isCalculating: to respond to changes in calculation state
  // - resetCalculations and runCalculation: included to satisfy exhaustive-deps rule,
  //   though they should be stable if memoized with useCallback

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
