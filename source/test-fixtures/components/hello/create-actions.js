const createActions = (actions) => {
  return Object.assign(
    {},
    {
      setWord () {},
      setMode () {}
    },
    actions
  );
};

export default createActions;
