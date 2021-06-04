const addToCart = (value) =>{
  return {
    type: 'INCREMENT',
    payload: value
  }
};



export {addToCart} ;