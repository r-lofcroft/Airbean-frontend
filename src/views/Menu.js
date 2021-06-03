import { useEffect, useState } from 'react';

const Menu = props => {
  const [menu, setMenu] = useState();
  const [menuLoaded, setMenuLoaded] = useState(false);

  
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
    <div>
      {menuLoaded ? (
        <table className="menuTable">
          <tbody>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
            </tr>          
              {menu.map((titleItem, index)=>(
                <tr key={index}>
                  <td><button key={titleItem.id}>+</button></td>
                  <td>{titleItem.title}</td>
                  <td>{titleItem.desc}</td>
                  <td>{titleItem.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>No menu found, please try again</p>
      )}
    </div>
  );
}

export default Menu;