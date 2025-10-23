import React, { useState } from 'react';

const initialSessions = [
  {
    id: 1,
    browser: 'Chrome',
    icon: '🌐',
    location: 'New York, USA',
    ip: '192.168.1.2',
  },
  {
    id: 2,
    browser: 'Firefox',
    icon: '🦊',
    location: 'Berlin, Germany',
    ip: '203.0.113.5',
  },
  {
    id: 3,
    browser: 'Safari',
    icon: '🧭',
    location: 'Tokyo, Japan',
    ip: '10.0.0.14',
  },
];

export default function BrowserTable() {
  const [sessions, setSessions] = useState(initialSessions);

  const handleDelete = (id) => {
    setSessions(sessions.filter((session) => session.id !== id));
  };

  return (
    <div className="browser-table-container">
      <table className="browser-table">
        <thead>
          <tr>
            <th>Browser</th>
            <th>Location</th>
            <th>IP Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sessions.map(({ id, browser, icon, location, ip }) => (
            <tr key={id}>
              <td>
                <span className="browser-icon">{icon}</span>
                <span className="browser-name">{browser}</span>
              </td>
              <td>{location}</td>
              <td>{ip}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(id)}
                  aria-label="Remove session"
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
