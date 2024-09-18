# Traffic Light Fibonacci Calculator

## Overview

The Traffic Light Fibonacci Calculator is a React-based web application that visualizes the calculation of Fibonacci numbers using a traffic light metaphor. It provides an interactive and engaging way to explore the Fibonacci sequence from the starting value calculating upto the next 10 concurrent calculation sequence.

## Features

- 4 traffic light components, each calculating a range of Fibonacci numbers starting from 0, 10, 20 and 30 (configurable). 
- Visual representation of calculation states using traffic light colors:
  - Red: Stopped
  - Yellow: Calculating
  - Green: Result displayed within the green light.
- Synchronized start/reset functionality for all traffic lights
- Displays Fibonacci numbers as they are calculated in the center of the greenlight

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 12.0 or later)
- npm (usually comes with Node.js)

## Installation

- Since source folder will be sent via email. No git repository of this file has been created yet.

## Running the Application

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Usage

- Click the "Start Calculation" button to begin the Fibonacci number calculations.
- Each traffic light will cycle through red (stopped), yellow (calculating), and green (displaying result) states.
- The current Fibonacci number being calculated is displayed below each traffic light.
- Click the "Reset Calculation" button to reset all traffic lights and stop the calculation process.

## Optimizations
- useCallback: Mentions its use for resetCalculations and runCalculation to return the same function instances between similar renders.
- Custom Hooks: Highlights useFib and useDelay.
- useState: Notes its use for managing local component state.
- useEffect: Explains its role in managing the calculation lifecycle.
- Conditional Rendering: Efficient conditional rendering of the Fibonacci result.
- Prop Callbacks: Mentions the use of onStopCalculation for parent-child communication in order stop the calculation once by updating the parent state.
- CSS Class Toggling: Using regular css stylings to update the traffic light's visual state.

## Project Structure

- `src/components/TrafficLights.tsx`: The main component for individual traffic lights
- `src/App.tsx`: The parent component that manages multiple TrafficLights
- `src/utils/useFib.ts`: Custom hook for Fibonacci number calculation with optimized caching in order to store previous calculations.
- `src/utils/useDelay.ts`: Custom hook for simulating calculation delay in order to switch between traffic lights.
- `src/utils/data.ts`: Contains the starting values and number of calculation cycles the fibonacci number will be calculated from the base value
