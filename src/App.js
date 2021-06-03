import './App.css';

import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Menu from './views/Menu';
import About from './views/About';

import { addCoffee } from './actions/menuAction';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('http://localhost:8001/api/coffee');
      const data = await response.json();

      dispatch(addCoffee(data.menu));
    }

    getMenu();
  }, [])

  return (
    <section className="App">
        <div>
          <Switch>
            <Route path="/" component={ Menu } exact />
            <Route path="/about" component={ About } exact />
          </Switch>
        </div>
    </section>
  );
}

export default App;
