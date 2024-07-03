import React, { useState, useEffect } from 'react';
import '../Assets/styles/Events.css';
function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchedEvents = [
      { id: 1, day: 'Monday', date: '2023-04-03', name: 'Tech Conference' },
      { id: 2, day: 'Wednesday', date: '2023-04-05', name: 'Webinar on React' },
      { id: 3, day: 'Friday', date: '2023-04-07', name: 'Networking Event' },
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <div className="events-container">
      {events.map(event => (
        <div key={event.id} className="event">
          <h3>{event.name}</h3>
          <p>{event.day}, {new Date(event.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;