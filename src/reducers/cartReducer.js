const intiialState = 0
    
  const cartReducer = (state = intiialState, action) => {
    switch(action.type){
      case 'INCREMENT':
        return state + action.payload
      default:
        return state
    }
  }


export default cartReducer;




