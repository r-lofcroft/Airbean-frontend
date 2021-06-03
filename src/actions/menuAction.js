export const setMenu = (menu) => {
  return {
    type: 'SET_Menu',
    payload: menu
  }
}

export const addCoffee = (coffee) => {
  return {
    type: 'ADD_COFFEE',
    payload: coffee
  }
}

