
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
      case 'DECREMENT':
        return {
          ...state,
          cartArr: state.cartArr.filter((i=>v=>v.id!==action.payload.id||--i)(1))
        }
      default:
        return state
    }
  }


export default cartReducer;




