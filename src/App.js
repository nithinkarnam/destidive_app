//app.js
import React, { useState } from 'react';
import DestinationSelector from './components/DestinationSelector';
import ServiceList from './components/ServiceList';
import './styles/App.css';

function App() {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [showServices, setShowServices] = useState(false);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    setShowServices(false); // Reset showServices when a new destination is selected
  };

  const handleSubmit = () => {
    // Add any processing logic here if needed
    console.log(`Processing for ${selectedDestination}`);
    setShowServices(true);
  };

  return (
    <div className="container">
      <a href="https://destidive-app.vercel.app/">
  <h1>Destination Attractions Spotter</h1>
</a>
      <div className="select-container">
        <DestinationSelector onSelectDestination={handleSelectDestination} />
        <button onClick={handleSubmit} disabled={!selectedDestination}>
          Submit
        </button>
      </div>
      {showServices && selectedDestination && (
        <ServiceList selectedDestination={selectedDestination} />
      )}
      <h3><a href="https://github.com/nithinkarnam" target="_blank">Designed and Developed by Karnam Nithin</a></h3>
    </div>
  );
}

export default App;
