import { useSelector } from 'react-redux';

function Menu(){
  const menu = useSelector ((state) => { return state.menu});

  return (
    <section>
      { menu.map((menuItem) => {
        return <Menu menu={ menuItem.title } key={ menuItem.id } />
      })}
    </section>
  )
}


export default Menu;