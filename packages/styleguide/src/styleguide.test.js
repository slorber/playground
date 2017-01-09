import React from 'react';
import ReactDOM from 'react-dom';
import Styleguide from './styleguide';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Styleguide />, div);
});
