import React from 'react';

// components
import Grudges from './grudges/grudges';
import NewGrudge from './new-grudge/new-grudge';

// styles
import { ApplicationStyled } from './application.styled';

const Application = () => (
  <ApplicationStyled>
    <NewGrudge />
    <Grudges />
  </ApplicationStyled>
);

export default Application;
