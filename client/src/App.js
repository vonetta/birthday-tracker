import React, { Component } from 'react';
import './App.css';
import './css/fullcalendar.css'
import './css/style.css'
import './css/react-datetime.css'
import Register from './register'
import Login from './login'
import Home from './home'
import Calendar from './calendar'
import Confirm from './confirm.email'
import dotenv from 'dotenv'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import profile from './images/default_profile.jpg'

import 'react-notifications/lib/notifications.css';

dotenv.config()


class App extends Component {

  render() {
    return (
      <div>
        <div>
          <header>
            <ul id="dropdown1" className="dropdown-content">
              <li>
                <a href="/">Settings</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="/">Log Out</a>
              </li>
            </ul>
            <nav>
              <div className="nav-wrapper">
                <a href="/" className="brand-logo">Birthday Tracker</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                  <Link to={`/home`}>Home</Link>
                  <Link to={`/register`}>Register</Link>
                  <Link to={`/login`}>Login</Link>
                  <li className="pic">
                    <a className="dropdown-button" href="#!" data-activates="dropdown1">
                    <img src={profile} alt=""/> <i className="material-icons right">arrow_drop_down</i><span className="username">Vonetta Stevenson</span></a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/calendar/:userId" component={Calendar} />
            <Route path="/confirm-email/:userId" component={Confirm} />
          </Switch>
        </div>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
