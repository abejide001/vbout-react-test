import React, { useContext } from 'react';
import Grudge from './Grudge';

// store
import { GrudgeContext } from '../store/grudges.store';

// constants
import { UPDATE_GRUDGE } from '../constants.json';

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
    <section className="Grudges">
      <h2>Grudges ({grudges.length})</h2>
      {grudges.map((grudge) => (
        <Grudge key={grudge.id} grudge={grudge} onForgive={onForgive} />
      ))}
    </section>
  );
};

export default Grudges;
