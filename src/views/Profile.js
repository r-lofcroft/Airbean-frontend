import { useEffect, useState } from 'react';

function Profile(){
  const [id, setID] = useState(); 
  const [orders, setOrder] = useState();
  const [accounts, setAccount] = useState();

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
       fetch(`http://localhost:8001/api/account/`)
        .then(response => response.json())
        .then(data => setID(data.activeAccount));
  
       fetch(`http://localhost:8001/api/order/${id}`)
        .then(response => response.json())
        .then(data => setOrder(data));

      fetch(`http://localhost:8001/api/account/`)
        .then(response => response.json())
        .then(data => setAccount(data))
  }, [id]);
  let username = accounts && accounts.accounts.find(x=>x.id===id).username
  let email = accounts && accounts.accounts.find(x=>x.id===id).email
  document.body.style.backgroundColor ="#2F2926"
  document.body.style.color = " #F3E4E1"
  return (
    <section className="profile">
      <img className="banner" src="Banner.png" alt="banner"></img>
      <div id="avatarContainer">
        <img id="avatar" src="avatar.png" alt="avatar"></img>
        <h1>{username}</h1>
        <p>{email}</p>
      </div>
        <div id="orderContainer">
      <h2>Orderhistorik</h2>
            { orders && orders.map((order) => {
              return <p id="orderHistory" task={ order.title } key={ order.orderID } >{order.orderID} {order.date}</p>})}
        </div>
    </section>
  );
}

export default Profile;
