import React from 'react';
// import { useState } from 'react';
// import dayjs from 'dayjs';
import { DateProvider } from '../context/DateContext';
import InitCalendar from '../helpers/InitCalendar';
import './MonthGrid.css';

function MonthGrid() {
  return (
    <div className="month-grid">
      <DateProvider>
        <InitCalendar />
      </DateProvider>
    </div>
  );
}

export default MonthGrid;
