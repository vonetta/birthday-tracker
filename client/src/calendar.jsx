/*global $*/
import React, { Component } from "react"
import "./css/fullcalendar.css"
import FullCalendar from "fullcalendar-reactwrapper"
import { readById } from "./services/event.service"
import BirthdayForm from "./birthdayForm"
import BirthdayList from "./birthdayList"
import Nav from "./nav"
// import { getCurrentUser } from "./services/authentication.service"

class Calendar extends Component {
  state = {
    newEventDate: "",
    newEntry: "",
    modal: false,
    eventId: "",
    userId: "",
    events: [],
    list: false
  }

  componentWillMount() {
    this.setState({ userId: this.props.match.params.userId.trim() })
  }

  componentDidMount() {
    readById(this.state.userId)
      .then(data => this.setState({ events: data.data }))
      .catch(err => console.log(err))
    console.log(this.state.userId)
  }

  dayClick = (date, jsEvent, view) => {
    this.setState({
      newEventDate: date,
      modal: true
    })
  }

  reload = data => {
    this.setState(prevState => {
      const newState = prevState.events.slice()
      newState.push(data)
      return {
        events: newState
      }
    })
  }

  viewList = () => {
    this.setState({
      list: true
    })
  }

  closeList = () => {
    this.setState({
      list: false
    })
    $("#list").modal("close")
  }

  render() {
    let form, list
    if (this.state.modal === true) {
      form = (
        <BirthdayForm
          eventData={this.state.newEventDate}
          modal={this.state.modal}
          userId={this.state.userId}
          callBack={this.reload}
        />
      )
    }

    if (this.state.list === true) {
      list = (
        <BirthdayList
          list={this.state.list}
          userId={this.state.userId}
          events={this.state.events}
          close={this.closeList}
        />
      )
    }

    let customButtons = {
      createButton: {
        text: "View All",
        click: this.viewList
      }
    }

    return (
      <div>
        <Nav logged={true} />
        <div className="row">
          <FullCalendar
            customButtons={customButtons}
            header={{
              center: "title",
              left: "prev, next, today  createButton",
              right: "month,agendaWeek,agendaDay"
            }}
            editable={true}
            dayClick={this.dayClick}
            defaultDate={new Date()}
            events={this.state.events.map(obj => ({
              title: "🎂" + obj.name,
              start: obj.date,
              color: "#f5bd3d"
            }))}
          />
          {form}
          {list}
        </div>
      </div>
    )
  }
}

export default Calendar
