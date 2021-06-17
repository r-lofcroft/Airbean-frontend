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

   return (
    <section className="Profile">
        <div id="orderContainer">
          <p>{arr && arr.orderID}</p>
          <h1>Din beställning är på väg!</h1>
          <p>{arr && arr.eta}</p>
          <a href='/menu'><button className="mainButton">Ok, cool!</button></a>
        </div>
    </section>
  );
}

export default Status;
