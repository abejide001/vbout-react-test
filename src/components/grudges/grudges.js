import React, { useContext } from 'react';
import * as R from 'ramda';

// components
import Grudge from '../grudge/grudge';

// store
import { GrudgeContext } from '../../store/grudges.store';

// constants
import { UPDATE_GRUDGE } from '../../constants.json';

// styles
import { GrudgesStyled } from './grudges.styled';

const Grudges = () => {
  const {
    state: { grudgesState = [], currentIndex = 0 },
    dispatch
  } = useContext(GrudgeContext);

  const grudges = R.pathOr([], [currentIndex - 1], grudgesState);

  const onForgive = (id) => {
    dispatch({
      type: UPDATE_GRUDGE,
      data: {
        id
      }
    });
  };
  return (
    <>
      <h2>Grudges ({grudges.length})</h2>
      <GrudgesStyled>
        {grudges.map((grudge) => (
          <Grudge key={grudge.id} grudge={grudge} onForgive={onForgive} />
        ))}
      </GrudgesStyled>
    </>
  );
};

export default Grudges;
