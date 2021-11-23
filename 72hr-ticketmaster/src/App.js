import React, { useState, useEffect } from "react";
import NasaApi from "./components/NasaApi";
import Weather from "./components/Weather";
import Ticketmaster from "./components/Ticketmaster";
import styled from 'styled-components'
import Delayed from "./components/Delayed";
import Loading from "./components/Loading";







var currentTime = new Date().getHours();
if (document.body) {
  if (0 <= currentTime && currentTime < 5) {
    document.body.background = "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2093&q=80"
}
    else if (5 <= currentTime && currentTime < 8) {
        document.body.background = "https://images.unsplash.com/photo-1453813242689-7ed56a2ec8e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80";
    }
    else if (8 <= currentTime && currentTime < 17){
      document.body.background = "https://images.unsplash.com/photo-1566321343730-237ec35e53f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80";
    }
    else if (17 <= currentTime && currentTime < 20){
      document.body.background = "https://images.unsplash.com/photo-1567304441104-d7a7d3e4bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80";
    }
    else {
        document.body.background = "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2093&q=80";
    }}

const Main = styled.div `

}
height: 110vh;
width: 100%;
margin-top: -21px;
font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif;
background-repeat: no repeat;
background-size: auto;
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
  opacity: 70%
  
  
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
opacity: 70%;
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
        console.log(status);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
  // AppFooter(() => {
  //   return (
  //   <Main className = 'AppFooter'>
  // <p>Data fetched from:</p><a href = "https://nasa.gov">Nasa, </a><a href = "http://openweathermap.org">OpenWeather, </a><p>and </p><a href="https://www.ticketmaster.com">Ticketmaster.</a>
  // </Main>
  // )
  // })

useEffect(() => {
  getLocation();
  setLoading(true)
    },[])

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

  function AppFooter() {
    return (
    <Main className = 'AppFooter'>
  <p>Data fetched from:</p><a href = "https://nasa.gov">Nasa, </a><a href = "http://openweathermap.org">OpenWeather, </a><p>and </p><a href="https://www.ticketmaster.com">Ticketmaster.</a>
  </Main>
  )
  }
}



export default App;