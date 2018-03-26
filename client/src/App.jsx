import React, { Component } from "react"
import "./css/style.css"
import "react-notifications/lib/notifications.css"
import Register from "./register"
import Login from "./login"
//import profile from "./images/default_profile.jpg"
import Home from "./home"
import Calendar from "./calendar"
import Confirm from "./confirm.email"
import Settings from "./settings"
import dotenv from "dotenv"
import { Switch, Route, Redirect } from "react-router-dom"
import Confetti from "./confetti"

dotenv.config()

class App extends Component {
  state = {
    redirect: false
  }

  render() {
    if (this.state.redirect === true) {
      this.setState({ redirect: false })
      return <Redirect to={"/login"} />
    }

    return (
      <div>
        <div>
          {/* <header>
            <ul id="dropdown1" className="dropdown-content">
              <li>
                <Link to={`/settings`}>Settings</Link>
              </li>
              <li className="divider" />
              <li>
                <a href="" onClick={this.logout}>
                  Log Out
                </a>
              </li>
            </ul>
            <nav>
              <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                  Birthday Tracker
                </a>
                <a
                  href=""
                  data-target="mobile-demo"
                  className="sidenav-trigger right"
                >
                  <i className="material-icons">menu</i>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <Link to={`/register`}>Register</Link>
             
                  <li className="pic">
                    <a
                      className="dropdown-button"
                      href="#!"
                      data-activates="dropdown1"
                    >
                      <img src={profile} alt="" />{" "}
                      <i className="material-icons right">arrow_drop_down</i>
                      <span className="username" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header> */}

          <Confetti />
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/calendar/:userId" component={Calendar} />
            <Route path="/confirm-email/:userId" component={Confirm} />
            <Route path="/" component={Home} />
          </Switch>
        </div>

        <footer className="page-footer">
          <div className="footer-copyright">
            <p className="center-block">
              © 2018 Vonetta Stevenson All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
