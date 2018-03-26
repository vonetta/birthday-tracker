import React, { Component } from "react"
import { Link } from "react-router-dom"
import { logout } from "./services/register.service"

class Navigation extends Component {
  logout = e => {
    e.preventDefault()
    logout()
      .then(data => {
        this.setState({ redirect: true })
      })
      .catch(err => console.log(err))
  }

  render() {
    //Get the logged value from wherever you are getting it in the application.
    // Eg: let logged = true
    return (
      <div>
        <header>
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                Birthday Tracker
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.props.logged ? (
                  <li>
                    <Link to={`/login`}>Log Out</Link>
                  </li>
                ) : (
                  <div>
                    <li id="register">
                      <Link to={`/register`}>Register</Link>
                    </li>
                    <li id="login">
                      <Link to={`/login`}>Login</Link>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Navigation
