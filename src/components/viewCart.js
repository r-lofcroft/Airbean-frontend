import {useSelector} from 'react-redux';

function ViewCart(){
  const counter = useSelector((state) => {return state.cartArr});
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const uniqueCounter = counter.filter(unique)

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
  console.log(uniqueCounter)
  console.log(useSelector(state=>{return (state.cartArr)}))
  return (
    <div>
      <h2>Cart: {counter.length}</h2>
      {uniqueCounter.map((uniqueTitle, index)=>{
        return(
          <p key={index}>{uniqueTitle.title}</p>
          )
        })} 
        {convertedCounter.map((counter, index)=>{
          return(
            <p key={index}>{counter.count}</p>
          )
        })}
    </div>
  )}

export default ViewCart;