/*global $*/

import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { logout } from "./services/register.service"
// import { getCurrentUser } from "./services/authentication.service"

class Navigation extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    //this.setState({ fullName: getCurrentUser() })
    $(".sidenav").sidenav()
  }
  logout = e => {
    e.preventDefault()
    logout()
      .then(data => {
        this.setState({ redirect: true })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.redirect === true) {
      this.setState({ redirect: false })
      return <Redirect to={"/login"} />
    }
    return (
      <div>
        <header>
          {/* <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                Birthday Tracker
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.props.logged ? (
                  <div>
                    <li>
                      <a href="" onClick={this.logout}>
                        Log Out
                      </a>
                    </li>
                  </div>
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
          </nav> */}
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                Birthday Tracker
              </a>
              <a href="" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                {this.props.logged ? (
                  <div>
                    <li>
                      <a href="" onClick={this.logout}>
                        Log Out
                      </a>
                    </li>
                  </div>
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

          <ul className="sidenav" id="mobile-demo">
            {this.props.logged ? (
              <div>
                <li>
                  <a href="" onClick={this.logout}>
                    Log Out
                  </a>
                </li>
              </div>
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
        </header>
      </div>
    )
  }
}

export default Navigation
