export default (
    state = { mode: 'display', subject: 'World' }, { mode, subject, type } = {}
  ) => {

  switch (type) {
    case 'SET_MODE': return {...state, mode};
    case 'SET_SUBJECT': return {...state, subject};
    default: return state;
  }

};
