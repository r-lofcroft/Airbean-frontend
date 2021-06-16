import { useEffect, useState } from 'react';

function Profile() {
  const [id, setID] = useState();
  const [orders, setOrder] = useState();

  const getId = async () => {
    try{
      let response = await fetch('http://localhost:8001/api/account/')
      let json = await response.json()
      return {success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  } 
  useEffect(() => {
    (async () => {
      let res = await getId();
      if(res.success){
        setID(res.data.activeAccount)
      }
    })();
  }, [])
   
  const fetchOrder = async () => {
    try{
      let response = await fetch(`http://localhost:8001/api/order/${id}`);
      let json = await response.json();
      return {success: true, data: json}
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }
  useEffect(() => { 
    (async () => {
      let orderData = await fetchOrder();
      if (orderData.success){
        setOrder(orderData.data)
      }
    })()
    fetchOrder()
  }, [id])
  console.log(id)
  console.log(orders)
  return (
    <section className="App">
 <h1>Profile</h1>
        <div>
        
        </div>

    </section>
  );
}

export default Profile;
