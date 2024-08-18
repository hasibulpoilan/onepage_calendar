import React, { useState } from 'react';
import { EventProvider } from './context/EventContext';
import Calendar from './components/Calendar';
import EventForm from './components/EventForm';
import EventModal from './components/EventModal';
import './styles.css';


const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <EventProvider>
      <button onClick={handleOpenForm}>Add New Event</button>
      {isFormOpen && <EventForm onClose={handleCloseForm} />}
      <Calendar onSelectEvent={handleSelectEvent} />
      {selectedEvent && <EventModal event={selectedEvent} onClose={handleCloseModal} />}
    </EventProvider>
  );
};

export default App;
