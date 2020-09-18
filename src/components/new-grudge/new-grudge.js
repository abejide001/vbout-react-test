import React, { useState, useContext } from 'react';

// store
import { GrudgeContext } from '../../store/grudges.store';

// constants
import { ADD_GRUDGE, UNDO_GRUDGE, REDO_GRUDGE } from '../../constants.json';
import {
  PreviousStyled,
  NewGrudgeStyled,
  InputStyled,
  SubmitStyled,
  NextStyled
} from './new-grudge.styled';

const NewGrudge = () => {
  const {
    state: { grudgesState = [], currentIndex = 0 },
    dispatch
  } = useContext(GrudgeContext);

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

  const undoChange = () => dispatch({ type: UNDO_GRUDGE });
  const redoChange = () => dispatch({ type: REDO_GRUDGE });

  return (
    <NewGrudgeStyled onSubmit={handleChange}>
      <PreviousStyled
        type="button"
        onClick={undoChange}
        disabled={currentIndex <= grudgesState.length}
      >
        &laquo;
      </PreviousStyled>
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
      <NextStyled
        type="button"
        onClick={redoChange}
        disabled={currentIndex >= grudgesState.length}
      >
        &raquo;
      </NextStyled>
    </NewGrudgeStyled>
  );
};

export default NewGrudge;
