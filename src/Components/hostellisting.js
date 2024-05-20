// components/Hostel/HostelListings.js

import React, { useState, useEffect } from 'react';

function HostelListings() {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    // Fetch hostel listings from the backend API
    fetch('/api/hostels')
      .then(response => response.json())
      .then(data => setHostels(data))
      .catch(error => console.error('Error fetching hostels:', error));
  }, []);

  return (
    <div className="hostel-listings">
      <h2>Hostel Listings</h2>
      <ul>
        {hostels.map(hostel => (
          <li key={hostel.id}>
            <h3>{hostel.name}</h3>
            <p>{hostel.location}</p>
            <p>{hostel.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HostelListings;
