//destinationdetails.js
import React from 'react';

const DestinationDetails = ({ selectedDestination }) => {
  return (
    <div>
      <h2>Destination Details</h2>
      <p>Selected Destination: {selectedDestination}</p>
    </div>
  );
};

export default DestinationDetails;
