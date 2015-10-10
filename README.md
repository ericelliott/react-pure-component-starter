# React Pure Component Starter

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


## Unit Testing React Components

Unit testing React components is a lot easier than it sounds. React provides some great tools for it. Lets look at the imports for the `title` example in `test/title/index.js`:

```js
import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
```

The first line pulls in React. You'll need to pass it into the component, but that's not obvious if all you see is the one line in the component. Let's look at that again:

```js
export default React => (props) => <h1 {...props }>{ props.title }</h1>;
```

As you can see, React is a parameter, but it doesn't get explicitly mentioned anywhere in the rest of the line... and there are no other lines. So why do we need it?

Remember that **JSX is not real DOM markup**. There's a compile step that transforms the JSX code into this:

```js
React.createElement(
  "h1",
  props,
  props.title
);
```

That compiled output uses React, and expects it to be available inside the component scope, so you need to pass `React` in, even though it's not obvious that it's being used.

