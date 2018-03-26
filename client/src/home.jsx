import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "./nav"
class Home extends Component {
  render() {
    return (
      <div>
        <Nav logged={false} />
        <div className="row">
          <h1 className="center title">Never Miss A Birthday Again!!!!</h1>
          <div className="container">
            <div className="row">
              <div className="col s12 m3">
                <div className="cake">
                  <div className="plate" />
                  <div className="layer layer-bottom" />
                  <div className="layer layer-middle" />
                  <div className="layer layer-top" />
                  <div className="icing" />
                  <div className="drip drip1" />
                  <div className="drip drip2" />
                  <div className="drip drip3" />
                  <div className="candle">
                    <div className="flame" />
                  </div>
                </div>
              </div>

              <div className="col s12 m6 offset-m3">
                <div className="card">
                  <div className="card-content">
                    <h4 className="center">What is Birthday Tracker?</h4>
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
