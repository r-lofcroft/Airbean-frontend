import {useState} from 'react'
import About from './views/About'; 
import { Switch, Route } from 'react-router-dom';
import Login from "./components/login";
import SignUp from "./components/signup";
import Menu from "./components/Menu";
import Status from "./views/Status";
import Profile from "./views/Profile";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Nav } from './components';


function App() {
  const [open, setOpen] = useState(false);

  return (
    <section className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <header className="Header">
          <Burger open={open} setOpen={setOpen} />
          <Nav open={open} setOpen={setOpen} />
        </header>
        <div className="Content">
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={ About }  />
            <Route exact path="/menu" component={ Menu }  />
            <Route exact path="/profile" component={ Profile }  />
            <Route exact path="/status" component={ Status }  />
          </Switch>
        </div>
        </ThemeProvider>
    </section>
  );
}

export default App;
