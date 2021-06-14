import React from 'react';
import { bool } from 'prop-types';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {addToCart, decrement} from '../../../actions/cartActions'
import { StyledProducts } from './productsStyled';

const Products = ({ open }) => {
  const counter = useSelector((state) => {return state.cartArr});
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const uniqueCounter = counter.filter(unique)
  const dispatch = useDispatch();

  function addItemToCart(value) {
    console.log(value);
    dispatch(addToCart(value));
  };
  function removeItemFromCart(value) {
    console.log(value);
    dispatch(decrement(value));
  };
  function takeMyMoney(value) {
    let keys = []
    for(let i=0; i<value.length;i++){
      keys.push("title")
    }
    let map = new Map();
    for(var i = 0; i < keys.length; i++){ 
      map.set(keys[i], value[i]); 
    } 
    console.log(keys)
    console.log(value);
    let output = value.map(function(obj, index){
      let myobj = {};
      myobj[keys[index]]=obj;
      return myobj
    });
    console.log(output) 
    // fetch('http://localhost:8001/api/order', {
    //   body: JSON.stringify(output),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'POST'
    // })
    // .then(response => response.json())
    // .then(result => {
    //   console.log(result)
    // })
    
  };

  const convert = (counter) => {
    const res = {};
    counter.forEach((obj) => {
       const key = `${obj.title}`;
       if (!res[key]) {
          res[key] = { ...obj, count: 0 };
       };
       res[key].count += 1;
    });
  return Object.values(res);
  };
  console.log(convert(counter));
  let convertedCounter = convert(counter)

  let convertedCounterInt = convertedCounter.map((counter, index)=>{
    return(
      <p key={index}>{counter.count}</p>    
    )
  })

  let uniqueCounterProduct = uniqueCounter.map((uniqueTitle, index)=>{
    return(
      <div key ={index}>
        <button onClick={()=>removeItemFromCart(uniqueTitle)}>-</button>
        <p >{uniqueTitle.title}</p>
        <button onClick={()=>addItemToCart(uniqueTitle)}>+</button>
      </div>
    )
  }) 

  console.log(uniqueCounter)
  console.log(counter)
  let counterTitles = counter.map((counterTitle)=>{
    return(
      counterTitle.title
    )
  })
  console.log(counterTitles)
  return (
    <StyledProducts open={open}>
        <header> 
          Cart: {counter.length}
        </header>
        <div id="cartContainer">
          <p id="cartProduct">{uniqueCounterProduct}</p>
          <p id="cartInt">{convertedCounterInt}</p>
       </div>
        
       <button id="purchase" onClick={()=>takeMyMoney(counterTitles)}>
          Take my money!
       </button>
       </StyledProducts>
  )
};
Products.propTypes = {
  open: bool.isRequired,
}
export default Products;