import React, { Component } from 'react'
import FullCalendar from 'fullcalendar-reactwrapper'
import { readById } from './services/event.service'
//import { getCurrentUser } from './services/authentication.service'

import BirthdayForm from './birthdayForm'

class Calendar extends Component {
    state = {
        newEventDate: '',
        newEntry: '',
        modal: false,
        eventId: '',
        userId: '',
        events: []
    }

    componentWillMount() {
        this.setState({ userId: this.props.match.params.userId })
    }

    componentDidMount() {
        readById(this.state.userId)
            .then(data => this.setState({events: data.data}))
    }

    dayClick = (date, jsEvent, view) => {
        this.setState({
            newEventDate: date,
            modal: true
        })
    }

    render() {
        let form
        if (this.state.modal === true) {
            form = <BirthdayForm eventData={this.state.newEventDate} modal={this.state.modal} userId={this.state.userId} />
        }
        return (
            <div>
                <div className="row">

                    <FullCalendar header={{
                        center: 'title',
                        left: 'prev, next, today',
                        right: 'month,agendaWeek,agendaDay'
                    }} editable={true}
                        dayClick={this.dayClick}
                        defaultDate={new Date()}
                        eventClick={this.eventClick}
                        events={this.state.events.map(obj => (  {
                                    title:'🎂'+ obj.name,
                                    start: obj.date,
                                    color: '#f5bd3d'
                                }))} /> 
                    {form}
                </div>
                <pre>{JSON.stringify(this.state, null, 4)}</pre>
            </div>
        )
    }
}

export default Calendar