import React, { Component } from "react"
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col s12 m6" />

            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="images/sample-1.jpg" alt="" />
                  <span className="card-title">What are We?</span>

                  <div className="card-content">
                    <h4>Who Are We?</h4>
                    <p>
                      Birthday Tracker makes you a better friend. How many
                      friends have you forgot to say Happy Birthday to even
                      though Facebook or Google has told you it is their
                      birthday. With Birthday tracker you never have to worry
                      about that again. All you have to do is enter their
                      birthday and email address on the calendar and we will
                      send them a birthday message on their birthday and you
                      will not feel bad about forgetting anymore.{" "}
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to={`/login`} className="center">
                      Get Started
                    </Link>
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
