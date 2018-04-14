/*global $*/
import React, { Component } from "react"
import { Modal } from "react-materialize"
import { deleteDay, readById } from "./services/event.service"

class BirthdayList extends Component {
  state = { items: [] }

  componentDidUpdate(nextProps) {
    if (nextProps.list === true) {
      $("#list").modal("open")
    }
  }

  componentDidMount() {
    readById(this.props.userId)
      .then(data => this.setState({ items: data.data }))
      .catch(err => console.log(err))
  }

  delete = id => {
    deleteDay(id)
      .then(data => {
        this.props.callBack(this.state.form)
        this.setState({
          items: []
        })
        if (this.props.modal === true) {
          $("#test").modal("close")
        }
        if (this.props.list === true) {
          $("#list").modal("close")
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="row">
        <Modal
          id="list"
          actions={
            <button
              className="btn waves-effect waves-light "
              onClick={() => this.props.close()}
            >
              Close
            </button>
          }
        >
          <ul className="collection">
            {this.state.items.map(event => {
              return (
                <li key={event._id} className="collection-item">
                  {event.date} | {event.name} | {event._id}
                  <button
                    id={event._id}
                    className="btn waves-effect waves-light  red accent-4 right"
                    type="submit"
                    name="action"
                    onClick={() => this.delete(event._id)}
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
