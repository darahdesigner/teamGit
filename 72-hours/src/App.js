import React, { useState, useEffect } from "react";
import NasaApi from "./components/NasaApi";
import Weather from "./components/Weather";
import Ticketmaster from "./components/Ticketmaster";
import styled from 'styled-components'


const Main = styled.div `
background: rgb(255,253,208);
background: linear-gradient(90deg, rgba(255,253,208,1) 0%, rgba(0,128,128,1) 35%, rgba(255,253,208,1) 100%);
height: 100vh;
width: 100%;
margin-top: -21px;
`

const Nasa = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100vh;
float: right;
`

const WeatherStyle = styled.div`
border: 1px solid black;
width: 50%;
height: 50%;
`

const WeatherBox = styled.div`
  border: 1px solid black;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TicketStyle = styled.div`
border: 1px solid black;
width: 50%;
height: 50%;
`

function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
 
  useEffect(() => {
    getLocation();
  }, []);


  return (
    <Main  className="App">
      <Nasa>
      <NasaApi lat={lat} lng={lng}/>
      </Nasa>
      <WeatherStyle>
        <WeatherBox>
      <Weather lat={lat} lng={lng} />
      </WeatherBox>
      </WeatherStyle>
      <TicketStyle>
        <TicketBox>
      <Ticketmaster lat={lat} lng={lng} />
      </TicketBox>
      </TicketStyle>
    </Main>
  );
}

export default App;
