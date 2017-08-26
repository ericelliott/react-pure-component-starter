import createTitle from 'components/title';
import createHello from 'components/hello';
import { createStore } from 'redux';

import hello from 'store/reducers/hello';

const store = createStore(hello);

const setMode = (mode) => store.dispatch({ type: 'SET_MODE', mode });

store.subscribe(() => {
  console.log(store.getState());
});

export default React => {
  const Title = createTitle(React);
  const Hello = createHello(React);
  
  return ({ foo, ...props }) => {
    const helloProps = {
      ...props,
      actions: {
        setMode
      }
    };

    return (
      <div className="content">
        <Title { ...props } />
        <Hello { ...helloProps } />
        <p>Content goes here: { foo }</p>
      </div>
    );
  };
};
