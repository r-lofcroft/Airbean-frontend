const addToCart = (count) =>{
  return {
    type: 'INCREMENT',
    payload: count
  }
};


export {addToCart} ;