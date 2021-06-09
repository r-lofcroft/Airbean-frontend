const initialState = {
  cartArr:[]
}

  const cartReducer = (state = initialState, action) => {
    switch(action.type){
      case 'INCREMENT':
        return { 
          ...state,
          cartArr:[ ...state.cartArr, action.payload ]
        }
      default:
        return state
    }
  }


export default cartReducer;




