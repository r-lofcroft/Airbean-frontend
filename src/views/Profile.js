import React from 'react';
// import { useEffect, useState } from 'react';


export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      id: [],
      orders: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8001/api/account/')
    .then(response => response.json())
    .then(data => this.setState({ id: data.activeAccount}))
    fetch(`http://localhost:8001/api/order/${this.state.id}`)
    .then(response => response.json())
    .then(data => this.setState({ orders: data}))
  }
  render(){
    const { orders } = this.state.orders;
    console.log(this.state)
    return(
      <ul>{orders.map(order =>
        <li>{order.title}</li>
        )}
      </ul>
    )
  }

}
// function Profile(){
//   const [id, setID] = useState();
//   const [orders, setOrder] = useState();

//   useEffect(() => {
//     // GET request using fetch inside useEffect React hook
//        fetch(`http://localhost:8001/api/account/`)
//         .then(response => response.json())
//         .then(data => setID(data.activeAccount));
  
//        fetch(`http://localhost:8001/api/order/${id}`)
//         .then(response => response.json())
//         .then(data => setOrder(data));
  
//   }, [id]);
  
//   console.log(orders)
//   return (
//     <section className="App">
//       <h1>Profile</h1>
//         <div>
//           <p>{id}</p>
//         </div>
//     </section>
//   );
// }

// // export default Profile;
