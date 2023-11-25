//servicelist.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import data from '../data/destinations.json';

const ServiceList = ({ selectedDestination }) => {
  const uniqueServices = new Set();
  let services = [];

  // Filter unique services based on service name and category
  data.forEach((item) => {
    if (item.Destination === selectedDestination && item.Rating !== 0) {
      const serviceIdentifier = `${item.Service}-${item.L1Category}`;
      if (!uniqueServices.has(serviceIdentifier)) {
        uniqueServices.add(serviceIdentifier);
        services.push(item);
      }
    }
  });

  // Sort services in decreasing order of rating
  services.sort((a, b) => b.Rating - a.Rating);

  // Define animation properties
  const serviceListAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.div style={serviceListAnimation} className="service-list-container">
      <h2>Notable Attractions in {selectedDestination}</h2>
      <table>
        <thead>
          <tr>
            <th>Attraction Name</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {services
            .filter((service) => service.L1Category.toLowerCase() !== "restaurant")
            .map((service, index) => (
              <tr key={index}>
                <td>{service.Service}</td>
                <td>{service.Rating}</td>
                <td>{service.L1Category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </animated.div>
  );
};

export default ServiceList;