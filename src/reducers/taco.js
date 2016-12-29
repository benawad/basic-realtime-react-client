function tacos(state = [], action) {
  switch (action.type) {
    case 'NEW_TACO':
      return [...state, action.taco]
    default:
      return state;
  }
}


export default tacos;
