import React from 'react';

import Routes from '../Routes'
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header'

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

