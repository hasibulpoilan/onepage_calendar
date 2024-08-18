import React, { createContext, useState, useCallback, useMemo } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null); // State for category filter

  const addEvent = useCallback((newEvent) => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
  }, []);
  
  const editEvent = useCallback((updatedEvent) => {
    setEvents(prevEvents => prevEvents.map(event => event.id === updatedEvent.id ? updatedEvent : event));
  }, []);
  
  const deleteEvent = useCallback((eventId) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  }, []);
  
  const filteredEvents = useMemo(() => {
    if (!filterCategory) return events;
    return events.filter(event => event.category === filterCategory);
  }, [events, filterCategory]);

  return (
    <EventContext.Provider value={{ events: filteredEvents, addEvent, editEvent, deleteEvent, setFilterCategory }}>
      {children}
    </EventContext.Provider>
  );
};
