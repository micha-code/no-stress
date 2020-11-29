import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './App.css';
import Home from './Home/Home';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About/About.jsx';
import AddNew from './Add-new/Add-new.jsx';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <img
          className="LogoImg"
          src="images/logo-menu.svg"
          alt="Logo no-stress"
        />
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-new">Add new</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-new">
            <AddNew />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
