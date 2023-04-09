import React from 'react';
import dayjs from 'dayjs';
import './CalHeaderDate.css';

function CalHeaderDate() {
  const month = dayjs().format('MMM');
  const year = dayjs().year();
  return (
    <div className="cal-header-date">
      {month} {year}
    </div>
  );
}

export default CalHeaderDate;
