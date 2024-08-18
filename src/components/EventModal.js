import React, { useState } from 'react';
import useEvents from '../hooks/useEvents';
import styled from 'styled-components';


const EventModal = ({ event, onClose }) => {
  const { editEvent, deleteEvent } = useEvents();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);

  const handleSave = () => {
    editEvent({ ...event, title, date });
    setIsEditing(false);
    onClose(); // Close modal after saving
  };

  return (
    <ModalContainer>
      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
          <button onClick={onClose}>Close</button>
        </>
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  /* your modal styling */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 1000;
`;

export default EventModal;
