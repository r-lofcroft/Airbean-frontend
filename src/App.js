import './App.css';
import {useState} from 'react'
import About from './views/About'; 
import { Switch, Route } from 'react-router-dom';
import Login from "./components/login";
import SignUp from "./components/signup";
import Menu from "./components/Menu"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Nav } from './components';


function App() {
  const [open, setOpen] = useState(false);

  return (
    <section >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <header>
          <Burger open={open} setOpen={setOpen} />
          <Nav open={open} setOpen={setOpen} />
        </header>
        <div className="App">
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={ About }  />
            <Route exact path="/menu" component={ Menu }  />
          </Switch>
        </div>
        </ThemeProvider>
    </section>
  );
}

export default App;
