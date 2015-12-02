import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createHello from 'components/hello';

const Hello = createHello(React);
const render = reactDom.renderToStaticMarkup;

test('Hello', assert => {
  const msg = 'should render our hello greeting!';

  const text = '<p>Hello, World!</p>';
  const re = new RegExp(text, 'g');

  const el = <Hello />;
  const $ = dom.load(render(el));
  const output = $.html();

  const actual = re.test(output);
  const expected = true;

  assert.equal(actual, expected, msg);

  assert.end();
});
