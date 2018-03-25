import React, { Component } from 'react';
import { confirmEmail, readById } from "./services/register.service";

class ConfirmEmail extends Component {
    componentDidMount() {
        readById(this.props.match.params.userId)
            .then(data => confirmEmail(this.props.match.params.userId, data))
            .then(data => window.location.href = "/login")
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default ConfirmEmail