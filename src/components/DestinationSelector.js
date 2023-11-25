//destinationselector.js
import React, { useState, useEffect } from 'react';
import data from '../data/destinations.json';

const DestinationSelector = ({ onSelectDestination }) => {
  const [uniqueDestinations, setUniqueDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('');

  useEffect(() => {
    // Extract unique destination names using a Set
    const uniqueNames = new Set(data.map((item) => item.Destination));
    setUniqueDestinations([...uniqueNames]);
  }, []);

  const handleDestinationChange = (event) => {
    const selected = event.target.value;
    setSelectedDestination(selected);
    onSelectDestination(selected);
  };

  return (
    <div>
      <label>Select Destination:</label>
      <select value={selectedDestination} onChange={handleDestinationChange}>
        <option value="">Select...</option>
        {uniqueDestinations.map((destination, index) => (
          <option key={index} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;
