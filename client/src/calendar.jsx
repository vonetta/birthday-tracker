import React, { Component } from "react"
import "./css/fullcalendar.css"
import FullCalendar from "fullcalendar-reactwrapper"
import { readById } from "./services/event.service"
import BirthdayForm from "./birthdayForm"
import Nav from "./nav"

class Calendar extends Component {
  state = {
    newEventDate: "",
    newEntry: "",
    modal: false,
    eventId: "",
    userId: "",
    events: []
  }

  componentWillMount() {
    this.setState({ userId: this.props.match.params.userId })
  }

  componentDidMount() {
    readById(this.state.userId)
      .then(data => this.setState({ events: data.data }))
      .catch(err => console.log(err))
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

  render() {
    let form
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

    return (
      <div>
        <Nav logged={true} />
        <div className="row">
          <FullCalendar
            header={{
              center: "title",
              left: "prev, next, today",
              right: "month,agendaWeek,agendaDay"
            }}
            editable={true}
            dayClick={this.dayClick}
            defaultDate={new Date()}
            eventClick={this.eventClick}
            events={this.state.events.map(obj => ({
              title: "🎂" + obj.name,
              start: obj.date,
              color: "#f5bd3d"
            }))}
          />
          {form}
        </div>
      </div>
    )
  }
}

export default Calendar
