import React, { createContext, useContext } from 'react';

export const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);
