import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './container/users/AddUser'
import Navbar from './container/navbar/Index'
import About from './container/about/Index'
import { Contact } from './container/contact/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">

        <Navbar />
        <Switch>

          <Route exact path="/">
            <Index />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
