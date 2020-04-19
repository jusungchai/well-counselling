const loggedReducer = (state = null, action) => {
  switch (action.type) {
    // case 'IN':
    //   return state = true;
    case 'OUT':
      return state = false;
    case 'ADMIN':
      return state = "admin";
    case 'USER':
      return state = "user"; 
    default:
      return state;
  }
}

export default loggedReducer;