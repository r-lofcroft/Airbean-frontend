import './App.css';
import Menu from './views/Menu';
import About from './views/About';
  
import { Switch, Route } from 'react-router-dom';



function App() {

  return (
    <section className="App">
        <div>
          <Switch>
            <Route path="/menu" component={ Menu } exact />
            <Route path="/about" component={ About } exact />
          </Switch>
        </div>
    </section>
  );
}

export default App;
