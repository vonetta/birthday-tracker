/*global $*/
import React, { Component } from "react"
import { Modal } from "react-materialize"
//import { deleteDay } from "./services/event.service"

class BirthdayList extends Component {
  componentDidUpdate(nextProps) {
    if (nextProps.list === true) {
      $("#list").modal("open")
    }
  }

  delete = id => {
    alert("maybe")
    console.log(id)
  }

  render() {
    return (
      <div className="row">
        <Modal id="list">
          <ul className="collection">
            {this.props.events.map(event => {
              return (
                <li
                  key={event._id}
                  className="collection-item"
                  onClick={this.delete(event._id)}
                >
                  {event.date} | {event.name} | {event._id}
                  <button
                    className="btn waves-effect waves-light  red accent-4 right"
                    type="submit"
                    name="action"
                    onClick={this.delete.bind(this, event)}
                  >
                    <i className="material-icons">close</i>
                  </button>
                </li>
              )
            })}
          </ul>
        </Modal>
        <pre>{JSON.stringify(this.props, null, 4)}</pre>
      </div>
    )
  }
}

export default BirthdayList
