import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './CalHeaderGoTo.css';

function CalHeaderGoTo() {
  return (
    <div className="goto-today">
      <div className="goto">
        <input
          typeof="text"
          placeholder="mm/yyyy"
          className="date-input"
        ></input>
        <button className="goto-btn">
          <FaArrowRight />
        </button>
      </div>
      <button className="today-btn">today</button>
    </div>
  );
}

export default CalHeaderGoTo;
