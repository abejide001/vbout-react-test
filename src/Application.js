import React, { useState, useReducer, useEffect } from 'react';

import id from 'uuid/v4';
import reducer from "./reducer"
import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const Application = () => {
  let [{ history, hIndex }, dispatch] = useReducer
    (reducer, { grudges: initialState, hIndex: 0, history: [{ grudges: initialState }] })

  let [cg, setCG] = useState(history[hIndex].grudges)

  useEffect(() => {
    setCG(history[hIndex].grudges)
  }, [hIndex]);

  const addGrudge = (grudge) => {
    grudge.id = id();
    grudge.forgiven = false;
    dispatch({ type: "set-grudge", grudge })
  };

  const toggleForgiveness = (id) => {
    dispatch({ type: "toggle-forgiveness", id })
  };

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <div className="undobutton" id="previous" onClick={() => dispatch({ type: "undo" })}>&lt;</div>
      <div className="redobutton" id="next" onClick={() => dispatch({ type: "redo" })}>&gt;</div>
      <Grudges grudges={cg} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
