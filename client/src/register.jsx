import React, { Component } from 'react'

import { create } from './services/register.service'

import { NotificationContainer, NotificationManager } from 'react-notifications';
class Register extends Component {
    state = {
        register: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        submitted: false
    }

    createNotification = type => () => {
        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':
                NotificationManager.success('Success message', 'Title here');
                break;
            case 'warning':
                NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                break;
            case 'error':
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                });
                break;
            default:
                break;
        }
    }



    handleChange = (e) => {
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

    validityCheck = (propertyName) => {
        return (this.state.submitted && this[propertyName] && !this[propertyName].validity.valid ? 'validate' : '')
    }

    submit = () => {
        this.setState({ submitted: true })
        if (!this.registerFormElement.checkValidity()) { return }
        else {
            create(this.state.register)
                .then(data =>
                    this.createNotification('success'),
                    NotificationManager.success( "Please Check your email to confirm your registration","Thank you for registering"),
                    this.setState({ register: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    },
                    submitted: false})
                )
                .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <div>
          
                <div className="row">
                    <form className="registerForm m6" ref={ref => ((this.registerFormElement = ref))}>
                        <h5>Register</h5>
                        <div className={"row " + this.validityCheck('firstNameElement')} >
                            <div className="input-field col m12" >
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" ref={ref => ((this.firstNameElement = ref))} name="firstName" onChange={this.handleChange} className="validate" value={this.state.register.firstName} required={true} data-error="wrong" data-success="right" />
                                {this.state.submitted && this.firstNameElement && this.firstNameElement.validity.valueMissing && (<p>Please enter your first name</p>)}
                            </div>
                        </div>
                        <div className={"row " + this.validityCheck('lastNameElement')}>
                            <div className="input-field col m12">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" ref={ref => ((this.lastNameElement = ref))} name="lastName" onChange={this.handleChange} className="validate" value={this.state.register.lastName} required={true} data-error="wrong" data-success="right" />
                                {this.state.submitted && this.lastNameElement && this.lastNameElement.validity.valueMissing && (<p> Please enter your last name</p>)}
                            </div>
                        </div>
                        <div className={"row " + this.validityCheck('emailElement')}>
                            <div className="input-field col m12">
                                <input type="email" id="email" name="email" ref={ref => ((this.emailElement = ref))} onChange={this.handleChange} className="validate" value={this.state.register.email} required={true} data-error="invalid email" data-success="right" />
                                <label htmlFor="email">Email</label>
                                {this.state.submitted && this.lastNameElement && this.lastNameElement.validity.valueMissing && (<p>Please enter your email address</p>)}
                            </div>
                        </div>
                        <div className={"row " + this.validityCheck('passwordElement')}>
                            <div className="input-field col m12">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" ref={ref => ((this.passwordElement = ref))} name="password" onChange={this.handleChange} value={this.state.register.password} required={true} />
                                {this.state.submitted && this.passwordElement && this.passwordElement.validity.valueMissing && (<p>Please enter your password</p>)}
                            </div>
                        </div>
                        <NotificationContainer />
                        <div className="row">
                            <a className="waves-light btn" onClick={this.submit}>Join Us</a>
                        </div>

                    </form>
                    <pre>{JSON.stringify(this.state, null, 4)}</pre>
                </div>
            </div>
        )
    }
}


export default Register