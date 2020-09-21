import React from 'react';

// styles
import { GrudgeStyled, H3Styled, ForgivenStyled } from './grudge.styled';

const Grudge = ({ grudge, onForgive }) => {
  const forgive = () => onForgive(grudge.id);

  return (
    <GrudgeStyled>
      <H3Styled>{grudge.person}</H3Styled>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <ForgivenStyled>
          <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '}
          Forgiven
        </ForgivenStyled>
      </div>
    </GrudgeStyled>
  );
};

export default Grudge;
