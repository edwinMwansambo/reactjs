
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function BookingCalendar() {
  return (
    <div className="booking-calendar">
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          // Array of events from backend
          { title: 'Room 1', start: '2024-05-01', end: '2024-05-03' },
          { title: 'Room 2', start: '2024-05-07', end: '2024-05-10' }
        ]}
      />
    </div>
  );
}

export default BookingCalendar;
