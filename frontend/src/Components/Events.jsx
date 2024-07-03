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
    <section className="events-section mt-5">
      <div className="container my-5">
        <h4>Upcoming Events</h4>
          {events.map(event => (
            <div key={event.id} className="col-md-6">
              <div className="event-item">
                <i className="icon-placeholder"></i>
                <div>
                  <h6>{event.name}</h6>
                  <p>{event.day}, {new Date(event.date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Events;