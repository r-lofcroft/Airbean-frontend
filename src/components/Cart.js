import {useSelector} from 'react-redux';

function ViewCart(){
  const counter = useSelector((state) => {return state.cartArr.length});
  console.log(useSelector(state=>{return (state.cartArr)}))
  return (
    <h2>Cart: {counter}</h2>
  )
}

export default ViewCart;