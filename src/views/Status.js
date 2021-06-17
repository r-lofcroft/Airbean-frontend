import { useEffect, useState } from 'react';

function Status() {
  const [id, setID] = useState(); 
  const [orders, setOrder] = useState();

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
       fetch(`http://localhost:8001/api/account/`)
        .then(response => response.json())
        .then(data => setID(data.activeAccount));
  
       fetch(`http://localhost:8001/api/order/${id}`)
        .then(response => response.json())
        .then(data => setOrder(data));
  }, [id]);

  let arr = orders && orders[orders.length -1]
  console.log(arr)
  document.body.style.backgroundColor ="#E5674E"
  document.body.style.color = " #F3E4E1"
   return (
    <section className="status">
        <div>
          <p>OrderID: <em>{arr && arr.orderID}</em></p>
          <img id="drone" src="cupDrone.png" alt="drone"></img>
          <h1>Din beställning är på väg!</h1>
          <p>{arr && arr.eta}</p>
          <a href='/menu'><button className="subButton">Ok, cool!</button></a>
        </div>
    </section>
  );
}

export default Status;
