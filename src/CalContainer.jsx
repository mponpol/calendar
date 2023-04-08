import React from 'react';
import './CalContainer.css';
import CalHeader from './CalHeader';
import MonthGrid from './MonthGrid';

function CalContainer() {
  return (
    <div className="cal-container">
      <CalHeader />
      <MonthGrid />
    </div>
  );
}

export default CalContainer;
