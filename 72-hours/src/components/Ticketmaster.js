import React,{useState} from 'react'

const Ticketmaster = (props) => {
    const [events, setEvents] = useState('');

    const handleClick = () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&latlong=${props.lat},${props.lng}&apikey=pfyF9lEGdQN8wKexFoe6ulE5qcZigjRG&size=1`)
        .then(res => res.json())
        .then(res =>{
          setEvents(res._embedded.events[0].name)    
        })
    }
    return (
        <div>
            <p>{events}</p>
            <button onClick={handleClick}>Events</button>
        </div>
    )
}

export default Ticketmaster
