const assign = Object.assign;

export default (
    state = { mode: 'display', subject: 'World' }, { mode, subject, type } = {}
  ) => {

  switch (type) {
    case 'SET_MODE':
      return assign({}, state, {
        mode
      });
    case 'SET_SUBJECT':
      return assign({}, state, {
        subject
      });
    default:
      return state;
  }

};
