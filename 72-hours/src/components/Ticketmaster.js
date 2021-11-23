import React,{useState, useEffect} from 'react'
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid black;
margin-top: 10px;
border-radius: 10px;
padding: 20px;
width: 85%;
text-decoration: none;
background: white;
text-align: center;
`
const A = styled.a`
text-decoration: none;
color: navy;
`

const Title = styled.h1`
font-size: 20px;
text-align: center;
margin-top: -10px;
border-bottom: 1px solid black;
text-transform: uppercase;
padding-bottom: 3px;
`

const P = styled.p`
font-size: 10px;
margin-top: -10px;
`

const Ticketmaster = (props) => {
    const [events, setEvents] = useState('');
    const [events1, setEvents1] = useState('');
    const [events2, setEvents2] = useState('');
    const [events3, setEvents3] = useState('');
    const [events4, setEvents4] = useState('');
    const [link, setLink] = useState('');
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');
    const [link4, setLink4] = useState('');
    const [d, setD] = useState('');
    const [d1, setD1] = useState('');
    const [d2, setD2] = useState('');
    const [d3, setD3] = useState('');
    const [d4, setD4] = useState('');


    const handleClick = () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&apikey=pfyF9lEGdQN8wKexFoe6ulE5qcZigjRG&size=20&latlong=${props.lat},${props.lng}`)
        .then(res => res.json())
        .then(res =>{
            console.log(res)
          setEvents(res._embedded.events[0].name)    
          setEvents1(res._embedded.events[1].name)    
          setEvents2(res._embedded.events[2].name)    
          setEvents3(res._embedded.events[3].name)    
          setEvents4(res._embedded.events[4].name)
          setLink(res._embedded.events[0].url)    
          setLink1(res._embedded.events[1].url)    
          setLink2(res._embedded.events[2].url)    
          setLink3(res._embedded.events[3].url)    
          setLink4(res._embedded.events[4].url)    
          setD(res._embedded.events[0].promoter.description)    
          setD1(res._embedded.events[1].promoter.description)    
          setD2(res._embedded.events[2].promoter.description)    
          setD3(res._embedded.events[3].promoter.description)    
          setD4(res._embedded.events[4].promoter.description)    
        })
    }

    useEffect(()=>{
        handleClick();
    }, [])

    return (
        <Container>
            <Title>Events Near You</Title>
            <p><A href={link}>{events}</A></p>
            <P>{d}</P>
            <p><A href={link1}>{events1}</A></p>
            <P>{d1}</P>
            <p><A href={link2}>{events2}</A></p>
            <P>{d2}</P>
            <p><A href={link3}>{events3}</A></p>
            <P>{d3}</P>
            <p><A href={link4}>{events4}</A></p>
            <P>{d4}</P>
        </Container>
    )
}

export default Ticketmaster
