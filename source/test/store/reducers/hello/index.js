import test from 'tape';
import deepFreeze from 'deep-freeze';

import hello from 'store/reducers/hello';

test('SET_MODE', nest => {
  nest.test('...initial', assert => {
    const message = `should set { mode: 'display', subject: 'world' }`;

    const expected = {
      mode: 'display',
      subject: 'World'
    };

    const actual = hello();

    assert.deepEqual(actual, expected, message);
    assert.end();
  });


  nest.test(`...with { mode: 'edit' }`, assert => {
    const message = 'should set mode to edit mode';

    const stateBefore = {
      mode: 'display',
      subject: 'World'
    };
    const action = {
      type: 'SET_MODE',
      mode: 'edit'
    };
    const expected = {
      mode: 'edit',
      subject: 'World'
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const actual = hello(stateBefore, action);

    assert.deepEqual(actual, expected, message);
    assert.end();
  });

  nest.test(`...with { subject: 'foo'}`, assert => {
    const message = 'should set subject to "foo"';

    const stateBefore = {
      mode: 'display',
      subject: 'World'
    };
    const action = {
      type: 'SET_SUBJECT',
      subject: 'foo'
    };
    const expected = {
      mode: 'display',
      subject: 'foo'
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const actual = hello(stateBefore, action);

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
});
