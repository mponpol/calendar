import React, { useState, createContext, useContext } from 'react';
import dayjs from 'dayjs';

const DateContext = createContext();

export function useDate() {
  return useContext(DateContext);
}

export function DateProvider({ children }) {
  const [date, setDate] = useState(dayjs());
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
}
