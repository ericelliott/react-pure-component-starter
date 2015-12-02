import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createApp from 'App.js';
const App = createApp(React);

const render = reactDom.renderToStaticMarkup;

test('Hello', assert => {
  const msg = 'Should render all sections.';

  const props = {
    foo: 'foo',
    helloClass: 'hello',
    titleClass: 'title',
    title: 'Yay!'
  };

  const el = <App { ...props }/>;
  const $ = dom.load(render(el));

  const actual = {
    Hello: Boolean($(`.${ props.helloClass }`).html()),
    Title: Boolean($(`.${ props.titleClass }`).html())
  };

  const expected = {
    Hello: true,
    Title: true
  };

  assert.deepEqual(actual, expected, msg);

  assert.end();
});
