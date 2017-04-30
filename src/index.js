import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import mockData from './mockData';

ReactDom.render(
  <App data={mockData} />,
  document.querySelector('#root')
);
