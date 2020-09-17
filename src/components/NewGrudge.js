import React, { useState, useContext } from 'react';

// store
import { GrudgeContext } from '../store/grudges.store';

// constants
import { ADD_GRUDGE } from '../constants.json';

const NewGrudge = () => {
  const { dispatch } = useContext(GrudgeContext);

  const [person, setPerson] = useState('');
  const [reason, setReason] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_GRUDGE,
      data: {
        person,
        reason
      }
    });
  };

  return (
    <form className="NewGrudge" onSubmit={handleChange}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={person}
        onChange={(event) => setPerson(event.target.value)}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={reason}
        onChange={(event) => setReason(event.target.value)}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
};

export default NewGrudge;
