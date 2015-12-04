import React from 'react';
import test from 'tape';
import { shallow } from 'reagent';

import createTitle from 'components/title';

const Title = createTitle(React);

test('Title', assert => {
  const titleText = 'Hello!';
  const props = {
    title: titleText,
    titleClass: 'title'
  };
  const re = new RegExp(titleText, 'g');
  const $ = shallow(<Title { ...props } />);
  const output = $.find('.title').html();

  const actual = re.test(output);
  const expected = true;

  assert.equal(actual, expected,
    'should output the correct title text');

  assert.end();
});
