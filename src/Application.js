import React from 'react';

import Grudges from './components/Grudges';
import NewGrudge from './components/NewGrudge';

const Application = () => (
  <div className="Application">
    <NewGrudge />
    <Grudges />
  </div>
);

export default Application;
