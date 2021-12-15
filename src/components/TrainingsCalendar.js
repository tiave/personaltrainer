import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; //plugin for calendar 

function TrainingsCalendar() {
    const [trainings, setTrainings] = useState([]);
    const trainingList = [];

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    };

    for (let i = 0; i < trainings.length; i++) {
        if(trainings[i].customer.firstname || trainings[i].customer.firstname) {
            trainingList.push({start: trainings[i].date, title: trainings[i].activity+ ' (' +trainings[i].customer.firstname+ ' ' +trainings[i].customer.lastname+')'});
        }
    }

    useEffect(() => {
        fetchTrainings();
    }, []);

    console.log(trainingList);

    return(
        <div id='calendar' style={{height: '100%', width: '90%'}}>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
        }}
        events={trainingList}
        />
        </div> 
    );
}

export default TrainingsCalendar;