import React, { Component } from 'react'

class Login extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            login: {
                email: '',
                password: ''
            },
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
        this.validityCheck = this.validityCheck.bind(this)
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState((prevState) => {
            const newState = Object.assign({}, prevState.register)
            newState[name] = value
            return {
                register: newState
            }
        })
    }

    validityCheck(propertyName) {
        return (this.state.submitted && this[propertyName] && !this[propertyName].validity.valid ? 'validate' : '')
    }

    submit() {

        this.setState({ submitted: true })
        if (!this.loginFormElement.checkValidity()) { return }
        else {

        }

    }
    render() {
        return (
            <div>
                <div className="row">
                    <form className="loginForm m6" ref={ref => ((this.loginFormElement = ref))}>
                        <h5>Login</h5>
                        <div className={"row " + this.validityCheck('emailElement')}>
                            <div className="input-field col m12">
                                <input type="email" id="email" name="email" ref={ref => ((this.emailElement = ref))} onChange={this.handleChange} class="validate" value={this.state.login.email} required={true} data-error="invalid email" data-success="right" />
                                <label htmlFor="email">Email</label>
                                {this.state.submitted && this.lastNameElement && this.lastNameElement.validity.valueMissing && (<p>Please enter your email address</p>)}
                            </div>
                        </div>
                        <div className={"row " + this.validityCheck('passwordElement')}>
                            <div className="input-field col m12">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" ref={ref => ((this.passwordElement = ref))} name="password" onChange={this.handleChange} value={this.state.login.password} required={true} />
                                {this.state.submitted && this.passwordElement && this.passwordElement.validity.valueMissing && (<p>Please enter your password</p>)}
                            </div>
                        </div>
                        <div className="row">
                            <a className=" waves-light btn" onClick={this.submit}>Submit</a>
                        </div>
                        <div>
                            <p>or</p>
                        </div>
                    </form>
                    <pre>{JSON.stringify(this.state, null, 4)}</pre>
                </div>
            </div>
        )
    }
}


export default Login