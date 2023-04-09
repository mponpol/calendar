import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './CalHeaderBtn.css';

function CalHeaderBtn() {
  function handlePrev() {}
  function handleNext() {}
  return (
    <div className="cal-header-btn">
      <FaAngleLeft onClick={handlePrev} className="fa" />
      <FaAngleRight onClick={handleNext} className="fa" />
    </div>
  );
}

export default CalHeaderBtn;
