import React, { Component } from 'react';
import { readById } from "./services/register.service";
class ConfirmEmail extends Component {
    componentDidMount() {
        readById(this.props.match.params.userId)
            .then(data => console.log(data))
        // confirmEmail()
        //     .then(data => {
        //         console.log(data)
        //     })

    }
    render() {
        return (
            <div><h1>Confirm Email</h1></div>
        )
    }
}

export default ConfirmEmail