import React from 'react';

import './EventItem.css';

const eventItem = event => (
  <li key={event.eventId} className="events__list-item">
    <div>
      <h1>{event.title} - €{event.price}</h1>
      <h2>
      {new Date(event.date).toLocaleDateString()} {new Date(event.date).getHours()}:{(new Date(event.date).getMinutes()<10?'0':'') + new Date(event.date).getMinutes()}
      </h2>
      <div>{event.description}</div>
    </div>
    <div>
      {event.userId === event.creatorId ? (
        <p>Your the owner of this event.</p>
      ) : (
        <button className="btn" onClick={event.onDetail.bind(this, event.eventId)}>
          View Details
        </button>
      )}
    </div>
  </li>
)

export default eventItem;
