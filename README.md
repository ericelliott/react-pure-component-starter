# React Pure Component Starter

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced the ability to use pure functions as components. The react team calls them **functional components**.

This repo demonstrates pure components. It's based on the [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate) and features:

* Examples of pure components.
* Pure component factories, so you can use a single React instance, even if you load React from CDN.
* Hot reloading
* Unit test example with tape, demonstrating an easy way to test pure components.

## Getting Started

**Clone the repo & install:**

```sh
git clone git@github.com:ericelliott/react-pure-component-starter.git
cd react-pure-component-starter
npm install
```

**Start the dev server and follow instructions:**

```sh
npm start
```

**In another terminal window, start the dev console for lint/test feedback when you save files:**

```sh
npm run watch
```


## Pure Component Factories

Pure component factories let you inject your React instance into the component so that you can share a single React instance across your entire app -- even if you load React from CDN for client use (which may save lots of users time, because they'll already have it cached locally).

I recommend that all your reusable components export factories and take a React instance as a dependency. It's really easy. A regular pure component looks like this:

```js
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

As you can see, React is a parameter, but it doesn't get explicitly mentioned anywhere in the rest of the line... and there are no other lines. So why do we need it?

Remember that [**JSX is not real DOM markup**](https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918). There's a compile step that transforms the JSX code into this:

```js
React.createElement(
  "h1",
  props,
  props.title
);
```

That compiled output uses React, and expects it to be available inside the component scope, so you need to pass `React` in, even though it's not obvious that it's being used.

## Unit Testing React Components

I recommend Test Driven Development (TDD). Write your tests first. Learn how to write unit tests: Read [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d).

Unit testing React components is a lot easier than it sounds. Let's look at the imports for the `title` example in `test/title/index.js`:

```js
import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
```

The first line pulls in React, which you'll need to pass into the component factory. As we already mentioned, it's also required for the JSX to work.


### react-dom

```js
import reactDom from 'react-dom/server'
````

React 0.14 split the DOM utilities out of the main React package. There are several reasons for this change. One of the more important reasons is that React is not always used to render HTML DOM. For instance, Netflix uses it to render to an in-house rendering library called [Gibbon](https://www.youtube.com/watch?v=eNC0mRYGWgc), and Facebook has another framework called [React Native](https://facebook.github.io/react-native/), which lets you build native user interfaces on mobile using JavaScript, sharing much of the same code and architecture with your web and server apps.

So, react's DOM utilities now live in `react-dom`, which is split in two:

* `react-dom/server`
* `react-dom/client`

### Tape

```js
import test from 'tape';
```

Tape is a great testrunner because it keeps everything **very simple**. For details, read [Why I Use Tape Instead of Mocha, and So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4).

### Cheerio

```js
import dom from 'cheerio';
```

Cheerio is a jQuery-like API for querying and manipulating DOM nodes. If you know jQuery, you know Cheerio.

I use it for testing React component outputs. Much better than the peculiarly named `.findRenderedDOMComponentWithClass()` and `.scryRenderedDOMComponentsWithClass()` (I swear, [I'm not making these up](https://facebook.github.io/react/docs/test-utils.html)).

It does not need JSDom. It does not need Selenium web driver. It does not need a browser. Not even PhantomJS. Your DOM is just DOM. Save the browser wrangling for your critical path functional tests. Keep your component unit tests **simple**.

> "Simplicity is a feature." ~ Jafar Husain (Netflix, TC39)

