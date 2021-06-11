import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {addToCart, decrement} from '../actions/cartActions';


function ViewCart(){
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
      <tr key={index}>
        <td >{counter.count}</td>
      </tr>
    )
  })

  let uniqueCounterProduct = uniqueCounter.map((uniqueTitle, index)=>{
    return(
      <tr key={index}>
                <td><button onClick={()=>removeItemFromCart(uniqueTitle)}>-</button></td>

       <td >{uniqueTitle.title}</td>
       <td><button onClick={()=>addItemToCart(uniqueTitle)}>+</button></td>

      </tr>
    )
  }) 

  console.log(uniqueCounter)
  console.log(useSelector(state=>{return (state.cartArr)}))
  return (
    <section>
      <header> 
        Cart: {counter.length}
      </header>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Amount</th>
          </tr>
          <tr>
              <td>{uniqueCounterProduct}</td>
              <td>{convertedCounterInt}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )}

export default ViewCart;