import React from 'react';
import { render } from 'react-dom';
import Router  from './components/Router';
import "./css/style.css";
// npm install --save-dev babel-plugin-react-transform@beta
// render(<p>Heeeyyyyyyyy!</p>,document.querySelector('#main'));
render(<Router />,document.querySelector('#main') );
