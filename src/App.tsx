import { useState } from 'react';
import './App.css';
import TrafficLights from './components/TrafficLights';

// starting values for the fib calculation
const startingVals: number[] = [0, 10, 20, 30];

const App = () => {
  const [startCalculation, setStartCalculation] = useState(false);
  // function to start the fibonacci calculations
  const handleStartCalculation = () => {
    setStartCalculation(!startCalculation);
  };
  // stopping calculation based on the child component state
  const stopCalculation = () => {
    setStartCalculation(false);
  };

  return (
    <div className="app-container">
      <div className="app-title-container">
        <h1 className="app-title">Fibonacci Traffic Lights</h1>
        <button className="calc-button" onClick={handleStartCalculation}>
          {startCalculation ? 'Reset Calculations!!!' : 'Run Calculations!!!'}
        </button>
      </div>

      <div className="traffic-light-grid">
        <TrafficLights
          startValue={startingVals[0]}
          isCalculating={startCalculation}
          onStopCalculation={stopCalculation}
        />
        <TrafficLights
          startValue={startingVals[1]}
          isCalculating={startCalculation}
          onStopCalculation={stopCalculation}
        />
        <TrafficLights
          startValue={startingVals[2]}
          isCalculating={startCalculation}
          onStopCalculation={stopCalculation}
        />
        <TrafficLights
          startValue={startingVals[3]}
          isCalculating={startCalculation}
          onStopCalculation={stopCalculation}
        />
      </div>
    </div>
  );
};

export default App;
