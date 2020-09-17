import React, { useState, useContext } from 'react';

// store
import { GrudgeContext } from '../../store/grudges.store';

// constants
import { ADD_GRUDGE } from '../../constants.json';
import {
  NewGrudgeStyled,
  InputStyled,
  SubmitStyled
} from './new-grudge.styled';

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
    <NewGrudgeStyled onSubmit={handleChange}>
      <InputStyled
        placeholder="Person"
        type="text"
        value={person}
        onChange={(event) => setPerson(event.target.value)}
      />
      <InputStyled
        placeholder="Reason"
        type="text"
        value={reason}
        onChange={(event) => setReason(event.target.value)}
      />
      <SubmitStyled className="button" type="submit" />
    </NewGrudgeStyled>
  );
};

export default NewGrudge;
