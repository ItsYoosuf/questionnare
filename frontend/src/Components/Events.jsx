import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/styles/Events.css';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/api/events'); // Adjust the URL as needed
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  

  return (
    <section className="events-section mt-5">
      <div className="container my-5">
        <h4>Upcoming Events</h4>
          {events.map(event => (
            <div key={event._id} className="col-md-6">
              <div className="event-item">
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