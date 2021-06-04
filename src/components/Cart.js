import {useSelector} from 'react-redux';

function ViewCart(){
  const counter = useSelector((state) => {return state});

  return (
    <h2>Cart: {counter}</h2>
  )
}

export default ViewCart;