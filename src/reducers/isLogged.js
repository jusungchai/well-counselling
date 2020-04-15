const loggedReducer = (state = null, action) => {
  switch (action.type) {
    case 'IN':
      return state = true;
    case 'OUT':
      return state = false;
    default:
      return state;
  }
}

export default loggedReducer;