import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {addToCart} from '../actions/cartActions';
import ViewCart from './Checkout/Cart/viewCart';
import Products from './Checkout/Products/products';


function Menu() {
  const [open, setOpen] = useState(false);

  const [menu, setMenu] = useState();
  const [menuLoaded, setMenuLoaded] = useState(false);
  const dispatch = useDispatch();
  
  
  function addItemToCart(value) {
    console.log(value);
    dispatch(addToCart(value));
    
  };


  
  const fetchMenu = async () => {
    try {
      let response = await fetch('http://localhost:8001/api/coffee');
      let json = await response.json();
      return { success: true, data: json };
     
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }
  useEffect(() => {
    (async () => {
      setMenuLoaded(false);
      let res = await fetchMenu();
      if (res.success) {
        // console.log(res.data.menu)
        setMenu(res.data.menu);
        setMenuLoaded(true);
      }
    })();
  }, []);
  return (
    <section className="App">
      <header className="header">
        <ViewCart open={open} setOpen={setOpen}/>
        <Products open={open} setOpen={setOpen}/>
      </header>
      <h1>Meny</h1>
      {menuLoaded ? (
        <table className="menuTable">
          <tbody>     
              {menu.map((titleItem, index)=>(
                <tr key={index}>
                  <td><button onClick={()=>addItemToCart(titleItem)} key={titleItem.id}>+</button></td>
                  <td>{titleItem.title}</td>
                  <td>{titleItem.desc}</td>
                  <td>{titleItem.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>The menu was not available, please try again later.</p>
      )}
    </section>
  );
}

export default Menu;