import React from 'react';
import {IconContext} from 'react-icons'
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';

const root = ReactDOMClient.createRoot( document.getElementById('root') );
root.render(
  <IconContext.Provider value={{ color: 'gray', size: '22px' }}>
    <App />
  </IconContext.Provider>
);
