import React from 'react';
import useEvents from '../hooks/useEvents';
import styled from 'styled-components';

const Calendar = ({ onSelectEvent }) => {
  const { events, setFilterCategory } = useEvents();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  return (
    <div>
      <FilterContainer>
        <select onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          {/* Add more filter options as needed */}
        </select>
      </FilterContainer>
      <CalendarContainer>
        {days.map((day) => (
          <Day key={day}>
            <DayNumber>{day}</DayNumber>
            {events
              .filter(event => new Date(event.date).getDate() === day)
              .map(event => (
                <Event key={event.id} onClick={() => onSelectEvent(event)}>
                  {event.title} - {event.category}
                </Event>
              ))}
          </Day>
        ))}
      </CalendarContainer>
    </div>
  );
};

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
`;

const Day = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
`;

const DayNumber = styled.div`
  font-weight: bold;
`;

const Event = styled.div`
  background-color: #f0f0f0;
  margin-top: 5px;
  padding: 5px;
  cursor: pointer;
`;

export default Calendar;
