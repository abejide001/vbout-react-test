import React from 'react';
import ReactDOM from 'react-dom';

import { GrudgeProvider } from './store/grudges.store';
import Application from './Application';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <GrudgeProvider>
    <Application />
  </GrudgeProvider>,
  rootElement
);
