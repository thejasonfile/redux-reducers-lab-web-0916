export default function ingredientReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.payload]
    case 'REMOVE_INGREDIENT':
      return [...state.slice(0, action.payload), ...state.slice(state.length-1)]
    default:
      return state;
  }

}
