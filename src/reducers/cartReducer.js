const initialState = {
  cart: {},
  coffee: []
}

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload
      }
    case 'ADD_COFFEE':
      return {
        ...state,
        coffee: action.payload
      }
    default:
      return state
  }
} 
export default cartReducer;