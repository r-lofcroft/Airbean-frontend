import {useSelector} from 'react-redux';

function ViewCart(){
  const counter = useSelector((state) => {return state.cartArr});
  let counterInt = 1
  console.log(useSelector(state=>{return (state.cartArr)}))
  return (
    <div>
      <h2>Cart: {counter.length}</h2>
      Cart: {counter.map((counterTitle, index)=>{
        //Not working (if object already found then increase amount next to object title.)
        if (counterTitle.id === counterTitle.id){
          return(
            <p>{counterInt++}</p>)
        } else{
          return(
            (<p key={index}>{counterTitle.title} {counterInt}</p>))
        }})}
      
    </div>
  )
}

export default ViewCart;