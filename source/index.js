import React from 'react';
import { render } from 'react-dom';
import createApp from './App';

const App = createApp(React);

const props = {
  foo: 'yay!  🎸🎶',
  title: 'Pure Components Rock',
  helloClass: 'hello'
};

render(
  <App { ...props }></App>,
  document.getElementById('root')
);
