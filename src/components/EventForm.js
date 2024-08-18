import React, { useState } from 'react';
import useEvents from '../hooks/useEvents';

const EventForm = ({ onClose }) => {
  const { addEvent } = useEvents();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(''); // State for category

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ id: Date.now(), title, date, category });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event Title" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        {/* Add more categories as needed */}
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
