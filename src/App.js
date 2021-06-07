import './App.css';
import Menu from './views/Menu';
// import About from './views/About';
  
import { Switch, Route } from 'react-router-dom';
import ViewCart from './components/viewCart';
import Login from "./components/login";
import SignUp from "./components/signup";


function App() {

  return (
    <section className="App">
      <ViewCart />
        <div>
          <Switch>
            <Route path="/menu" component={ Menu } exact />
            {/* <Route path="/about" component={ About } exact /> */}
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
    </section>
  );
}

export default App;
