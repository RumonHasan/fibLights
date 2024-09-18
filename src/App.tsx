import { useState } from 'react';
import './App.css';
import TrafficLights from './components/TrafficLights';
import { startingVals } from './utils/data';

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
          {startCalculation ? 'Reset Calculation' : 'Start Calculation'}
        </button>
      </div>

      <div className="traffic-light-grid">
        {startingVals?.map((startValue: number) => (
          <TrafficLights
            startValue={startValue}
            isCalculating={startCalculation}
            onStopCalculation={stopCalculation}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
