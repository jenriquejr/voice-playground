import React from 'react';
import ReactDOM from 'react-dom';
import Studio from './containers/Studio';

const container = document.getElementById('studioApp');
if (container) {
  ReactDOM.render(<Studio />, container);
}
