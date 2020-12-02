import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About/About.jsx';
import AddNew from './AddNew/AddNew.jsx';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <nav className="topbar_container">
        <div className="SiteLogo">
          <img
            className="LogoImg"
            src="images/logo-menu.svg"
            alt="Logo no-stress"
          />
        </div>
        <div className="navbar">
          <button
            className={open ? 'hamburger hamburger_open' : 'hamburger'}
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <img className="LogoMenu" src="images/menu.svg" alt="Menu" />
          </button>
          {open && (
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addNew">Add new</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addNew">
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
