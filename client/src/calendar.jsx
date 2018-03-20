import React, {Component} from 'react'
import FullCalendar from 'fullcalendar-reactwrapper'

class Calendar extends Component{
state ={
    events:[]
}

    render(){
        return(
     
            <FullCalendar header={{
                center: 'title',
                left: 'prev, next, today',
                right: 'month,agendaWeek,agendaDay'}} editable={true}/>

       
        )
    }
}

export default Calendar