# React Pure Component Dev Starter

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced the ability to use pure functions as components. The react team calls them **functional components**.

This repo demonstrates pure components. It's based on the [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate) and features:

* Examples of pure components.
* Pure component factories, so you can use a single React instance, even if you load React from CDN.
* Hot reloading
* Unit test example with tape, demonstrating an easy way to test pure components.

## Pure Component Factories

Pure component factories lets you inject your React instance into the component so that you can share a single React instance across your entire app -- even if you load React from CDN for client use (which may save lots of users time, because they'll already have it cached locally).

I recommend that all your reusable components use factory exports. It's really easy. A regular pure component looks like this:

```
export default (props) => <h1 {...props }>{ props.title }</h1>;
```

To add the factory wrapper for React injection, just insert another arrow function with a `React` parameter:

```js
export default React => (props) => <h1 {...props }>{ props.title }</h1>;
```

If you're still confused, this desugars to this ordinary ES5:

```js
"use strict";

module.exports = function (React) {
  return function (props) {
    return React.createElement(
      "h1",
      props,
      props.title
    );
  };
};
```

Yeah. Arrow functions rock.

In case you blinked and missed it, the ES6 factory again:

```js
export default React => (props) => <h1 {...props }>{ props.title }</h1>;
```

