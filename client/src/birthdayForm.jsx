/*global $*/
import React, { Component } from "react"
import DateTime from "react-datetime"
import "./css/react-datetime.css"
import { Modal } from "react-materialize"
import { create } from "./services/event.service"

class BirthdayForm extends Component {
  state = {
    form: {
      date: this.props.eventData,
      name: "",
      email: "",
      userId: this.props.userId
    }
  }
  componentDidUpdate(nextProps) {
    if (nextProps.modal === true) {
      $("#test").modal("open")
    }
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState(prevState => {
      const newState = Object.assign({}, prevState.form)
      newState[name] = value
      return {
        form: newState
      }
    })
  }

  submit = () => {
    create(this.state.form)
      .then(data => {
        this.props.callBack(this.state.form)
        this.setState({
          form: {
            date: this.props.eventData,
            name: "",
            email: ""
          }
        })
        if (this.props.modal === true) {
          $("#test").modal("close")
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="row">
          <Modal id="test" header="New Birthday">
            <form>
              <div className="row">
                <div className="input-field col m3">
                  <div className="input-group date">
                    <DateTime
                      value={
                        this.state.form.selectedDate || this.props.eventData
                      }
                      input={true}
                      inputProps={{
                        readOnly: true,
                        ref: input => {
                          this.input = input
                        }
                      }}
                      closeOnSelect={true}
                      name="dateTime"
                      onChange={this.dateChange}
                      timeFormat={false}
                    />
                    <span
                      className="input-group-addon"
                      onClick={() => {
                        this.input.focus()
                      }}
                    >
                      <i className="material-icons right">date_range</i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col m12">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    ref={ref => (this.nameElement = ref)}
                    onChange={this.handleChange}
                    value={this.state.form.name}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col m12">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={ref => (this.emailElement = ref)}
                    onChange={this.handleChange}
                    value={this.state.form.email}
                  />
                </div>
              </div>
              <div className="row">
                <a className="waves-light btn" onClick={this.submit}>
                  Submit
                </a>
              </div>
            </form>
          </Modal>
        </div>
        <pre>{JSON.stringify(this.state, null, 4)}</pre>
      </div>
    )
  }
}

export default BirthdayForm
