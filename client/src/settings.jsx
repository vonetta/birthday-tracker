import React, { Component } from 'react'
import profile from './images/default_profile.jpg'
class Settings extends Component {
    render() {
        return (
            <div>
                <h1>Settings</h1>
                <div className="row">
                    <img src={profile} alt="profile pic" />
                    <a class="waves-effect waves-light btn" >Change picture</a>
                </div>

                <div className="row">
                    <form action="">
                        <div className="row">
                            <div className="input-field col m2">
                                <label htmlFor="">Full Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m2">
                                <label htmlFor="">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Settings