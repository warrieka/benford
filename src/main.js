import React from 'react';
import {IconContext} from 'react-icons'
import { MathJaxContext } from "better-react-mathjax";
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';

const Math_config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};


const root = ReactDOMClient.createRoot( document.getElementById('root') );
root.render(
  <MathJaxContext version={3} config={Math_config}>
  <IconContext.Provider value={{ color: 'gray', size: '22px' }}>
    <App />
  </IconContext.Provider>
  </MathJaxContext>
);
