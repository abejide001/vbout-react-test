// vendor
import React, { createContext, useReducer } from 'react';
import { grudgeActions } from './grudges.action';
import initialState from './initialState';

export const GrudgeContext = createContext(initialState);

export const GrudgeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(grudgeActions, initialState);

  return (
    <GrudgeContext.Provider value={{ state, dispatch }}>
      {children}
    </GrudgeContext.Provider>
  );
};
