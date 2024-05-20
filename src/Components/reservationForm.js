// components/Booking/ReservationForm.js

import React, { useState } from 'react';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    roomType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation logic here
    console.log('Reservation Data:', formData);
  };

  return (
    <div className="reservation-form">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label>Room Type:</label>
        <select name="roomType" value={formData.roomType} onChange={handleChange} required>
          <option value="single">Single</option>
          <option value="double">Double</option>
          {/* Add more room types as needed */}
        </select>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default ReservationForm;
