import React, { useState } from 'react';
import Navbar from './Navbar';
import './Location.css';

const serviceCenters = [
  { id: 1, name: 'COIMBATORE', location: 'UKADAM' },
  { id: 2, name: 'CHENNAI ', location: 'AAVADI' },
  { id: 3, name: 'MADURAI', location: 'AARAPALAYAM' },
  { id: 4, name: 'TRICHY', location: 'Fort' },
  { id: 5, name: 'BANGLORE', location: 'White Field' },
  { id: 6, name: 'KARAIKUDI', location: 'Anna Nagar' },
];

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationChange = (locationId) => {
    setSelectedLocation(locationId);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div>
          <h2><center>OUR BRANCHES</center></h2>
          <br/><br/>
          {serviceCenters.map((center) => (
            <div key={center.id}>
              <label>
                <input
                  type="radio"
                  name="location"
                  value={center.id}
                  checked={selectedLocation === center.id}
                  onChange={() => handleLocationChange(center.id)}
                />
                {center.name} - {center.location}
              </label>
              <br/><br/>
            </div>
          ))}
          <br/>
          <p><b>Selected Location: {selectedLocation && serviceCenters.find(center => center.id === selectedLocation).location}</b></p>
        </div>
      </div>
    </div>
  );
};

export default Location;
