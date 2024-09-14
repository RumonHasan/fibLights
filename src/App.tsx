import './App.css';
import TrafficLights from './components/TrafficLights';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Fibonacci Traffic Lights</h1>
      <div className="traffic-light-grid">
        <TrafficLights startValue={0} />
        <TrafficLights startValue={10} />
        <TrafficLights startValue={20} />
        <TrafficLights startValue={30} />
      </div>
    </div>
  );
};

export default App;
