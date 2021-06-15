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
    dispatch(addToCart(value));
  };
  function removeItemFromCart(value) {
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
    let output = value.map(function(obj, index){
      let myobj = {};
      myobj[keys[index]]=obj;
      return myobj
    });
    const obj = Object.assign({}, output);
    fetch('http://localhost:8001/api/order', {
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json())
    .then(result => {
    })
    
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
  let convertedCounter = convert(counter)

  let convertedCounterInt = convertedCounter.map((counter, index)=>{
    return(
      <p key={index}>{counter.count}</p>    
    )
  })

  let uniqueCounterProduct = uniqueCounter.map((uniqueTitle, index)=>{
    return(
      <ul key ={index}>
        <i className="arrow up" onClick={()=>addItemToCart(uniqueTitle)}></i>
        <li >{uniqueTitle.title}</li>
        <li >{uniqueTitle.price} kr</li>
        <i className="arrow down" onClick={()=>removeItemFromCart(uniqueTitle)}></i>
      </ul>
    )
  }) 

  let counterTitles = counter.map((counterTitle)=>{
    return(
      counterTitle.title
    )
  })
  var sum = 0;
  for (var i = 0; i < counter.length; i++) {
    sum += counter[i].price
  }
  return (
    <StyledProducts open={open}>
        <header> 
          <h1>Din beställning</h1>
        </header>
          {uniqueCounterProduct}
          {convertedCounterInt}
        <div>
          <p>Total: {sum}</p>
          <p>Inkl moms + drönarleverans</p>
        </div>
       <button className="mainButton    " onClick={()=>takeMyMoney(counterTitles)}>
          Take my money!
       </button>
       </StyledProducts>
  )
};
Products.propTypes = {
  open: bool.isRequired,
}
export default Products;