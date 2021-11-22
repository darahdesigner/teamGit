import React,{useState, useEffect} from 'react'

const Ticketmaster = (props) => {
    const [events, setEvents] = useState('');

    const handleClick = () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?$size=10&latlong=${props.lat},${props.lng}&apikey=pfyF9lEGdQN8wKexFoe6ulE5qcZigjRG&size=1`)
        .then(res => res.json())
        .then(res =>{
            console.log(res)
          setEvents(res._embedded.events[0].name)    
        })
    }

    useEffect(()=>{
        handleClick();
    })

    return (
        <div>
            <p>{events}</p>
        </div>
    )
}

export default Ticketmaster
