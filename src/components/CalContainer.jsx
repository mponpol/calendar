import React from 'react';
import CalHeader from './CalHeader/CalHeader';
import MonthGrid from './MonthGrid';
import './CalContainer.css';

function CalContainer() {
  return (
    <div className="cal-container">
      <CalHeader />
      <MonthGrid />
    </div>
  );
}

export default CalContainer;
