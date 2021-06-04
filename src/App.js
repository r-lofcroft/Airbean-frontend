import './App.css';
import Menu from './views/Menu';
// import About from './views/About';
  
import { Switch, Route } from 'react-router-dom';
import ViewCart from './components/Cart';



function App() {

  return (
    <section className="App">
      <ViewCart />
        <div>
          <Switch>
            <Route path="/" component={ Menu } exact />
            {/* <Route path="/about" component={ About } exact /> */}
          </Switch>
        </div>
    </section>
  );
}

export default App;
