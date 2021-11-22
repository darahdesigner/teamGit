import React, { useState, useEffect } from "react";
import NasaApi from "./components/NasaApi";
import Weather from "./components/Weather";
import Ticketmaster from "./components/Ticketmaster";
import styled from 'styled-components'
import Delayed from "./components/Delayed";
import Loading from "./components/Loading";


const Main = styled.div `
background: rgb(255,253,208);
background: linear-gradient(90deg, rgba(255,253,208,1) 0%, rgba(255,255,255,1) 100%);
height: 110vh;
width: 100%;
margin-top: -21px;
`

const Nasa = styled.div`
display: flex;
align-items: center;
justify-content: start;
width: 50%;
height: 100vh;
float: right;

`

const WeatherStyle = styled.div`
width: 50%;
height: 50%;
`

const WeatherBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`
const TicketStyle = styled.div`
width: 50%;
height: 50%;
`;

const TicketBox = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const MainC = styled.div`
width: 50%;
margin: auto;
`

function App(props) {
  const [lat, setLat] = useState({});
  const [lng, setLng] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading]= useState(false)

  const getLocation = async () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      await navigator.geolocation.getCurrentPosition((position) => {
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
  setLoading(true)
    }, [])

    if(loading === true) {
      <NasaApi />
    } else {
      return 'Loading...'
    }


  return (
    <Main  className="App">
      <Loading />
      <Delayed>
        <MainC>
      <Nasa>
      <NasaApi lat={lat} lng={lng} />
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
      </MainC>
      </Delayed>
    </Main>
  );
}

export default App;
