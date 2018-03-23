import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="images/sample-1.jpg" alt="" />
                                    <span className="card-title">Card Title</span>

                                    <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="/">This is a link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="images/sample-1.jpg" alt="" />
                                    <span className="card-title">Card Title</span>

                                    <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="/">This is a link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="images/sample-1.jpg" alt="" />
                                    <span className="card-title">Card Title</span>
                                    <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="/">This is a link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home