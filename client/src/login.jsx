import React, { Component } from "react"
import google from "./images/google.png"
import { login } from "./services/register.service"
import { Redirect, Link } from "react-router-dom"
import Nav from "./nav"

class Login extends Component {
  state = {
    login: {
      email: "",
      password: ""
    },
    submitted: false,
    redirect: false,
    userId: ""
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState(prevState => {
      const newState = Object.assign({}, prevState.login)
      newState[name] = value
      return {
        login: newState
      }
    })
  }

  validityCheck = propertyName => {
    return this.state.submitted &&
      this[propertyName] &&
      !this[propertyName].validity.valid
      ? "validate"
      : ""
  }

  submit = () => {
    this.setState({ submitted: true })
    if (!this.loginFormElement.checkValidity()) {
      return
    } else {
      login(this.state.login)
        .then(data => {
          this.setState({ userId: data.data._id })
          this.setState({ redirect: true })
        })
        .catch(err => console.log(err))
    }
  }

  login = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_ORIGIN}/auth/google`
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to={`calendar/${this.state.userId} `} />
    }
    return (
      <div>
        <Nav logged={false} />

        <div className="container">
          <div className="row">
            <form
              className="loginForm col s12 m6 offset-m3"
              ref={ref => (this.loginFormElement = ref)}
            >
              <h4 className="center">Login</h4>
              <div className={"row " + this.validityCheck("emailElement")}>
                <div className="input-field col s12">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    ref={ref => (this.emailElement = ref)}
                    onChange={this.handleChange}
                    className="validate"
                    value={this.state.login.email}
                    data-error="invalid email"
                    data-success="right"
                  />
                  <label htmlFor="email">Email</label>
                  {this.state.submitted &&
                    this.lastNameElement &&
                    this.lastNameElement.validity.valueMissing && (
                      <p>Please enter your email address</p>
                    )}
                </div>
              </div>
              <div className={"row " + this.validityCheck("passwordElement")}>
                <div className="input-field col s12">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    ref={ref => (this.passwordElement = ref)}
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.login.password}
                  />
                  {this.state.submitted &&
                    this.passwordElement &&
                    this.passwordElement.validity.valueMissing && (
                      <p>Please enter your password</p>
                    )}
                </div>
              </div>
              <div className="row">
                <a className=" waves-light btn right" onClick={this.submit}>
                  Login
                </a>
              </div>

              <hr className="hr" />
              <div className="row">
                <a>
                  <img
                    src={google}
                    alt=""
                    onClick={this.login}
                    className="google"
                  />
                </a>
              </div>
              <hr className="hr" />
              <div>
                <p>
                  Don't have an account?
                  <Link to={`/register`} className="right">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
