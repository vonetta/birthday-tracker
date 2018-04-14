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
