const assign = Object.assign;

export default (
    state = { mode: 'display', subject: 'World' }, { mode, subject, type } = {}
  ) => {

  const actions = {
    SET_MODE () {
      return assign({}, state, {
        mode
      });
    },
    SET_SUBJECT () {
      return assign({}, state, {
        subject
      });
    }
  };

  if (!actions[type]) return state;
  return actions[type]();
};
