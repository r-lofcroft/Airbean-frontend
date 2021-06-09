import {useSelector} from 'react-redux';

function ViewCart(){
  const counter = useSelector((state) => {return state.cartArr});
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const uniqueCounter = counter.filter(unique)
  console.log(uniqueCounter)
  console.log(useSelector(state=>{return (state.cartArr)}))
  return (
    <div>
      <h2>Cart: {counter.length}</h2>
      Cart: {counter.map((counterTitle, index)=>{
        //Not working (if object already found then increase amount next to object title.)
          return(
            <p>{uniqueCounter.length} {counterTitle.title}</p>
          )
          })} 
    </div>
  )}

export default ViewCart;