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
    <section className="events-section my-5">
      <div className="container my-5">
        <h4>Upcoming Events</h4>
          {events.map(event => (
            <div key={event._id} className="col-md-6">
              <div className="event-item">
                <div>
                  <p>{`${new Date(event.date).toLocaleString('default', { month: 'long' })} ${new Date(event.date).getDate()}: ${event.name}`}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Events;