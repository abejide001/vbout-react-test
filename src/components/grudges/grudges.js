import React, { useContext } from 'react';
import Grudge from '../grudge/grudge';

// store
import { GrudgeContext } from '../../store/grudges.store';

// constants
import { UPDATE_GRUDGE } from '../../constants.json';

// styles
import { GrudgesStyled } from './grudges.styled';

const Grudges = () => {
  const {
    state: { grudges = [] },
    dispatch
  } = useContext(GrudgeContext);

  const onForgive = (id) => {
    dispatch({
      type: UPDATE_GRUDGE,
      data: {
        id
      }
    });
  };
  return (
    <GrudgesStyled>
      <h2>Grudges ({grudges.length})</h2>
      {grudges.map((grudge) => (
        <Grudge key={grudge.id} grudge={grudge} onForgive={onForgive} />
      ))}
    </GrudgesStyled>
  );
};

export default Grudges;
