import React from 'react';
import { render } from 'react-dom';
import createApp from './App';

const App = createApp(React);
const props = {
  foo: 'yay!  🎸🎶',
  title: 'Pure Components Rock'
};

render(
  <App { ...props }></App>,
  document.getElementById('root')
);
