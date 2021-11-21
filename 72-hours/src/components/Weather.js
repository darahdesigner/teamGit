import React, { useEffect, useState } from "react";
import styled from 'styled-components';


const Img = styled.img`
height: 100px;
width: 100px;
position: absolute;
margin-left: 230px;
margin-top: -10px;
`

const IconA = styled.div`
display: flex;
position: relative;
border: 1px solid black;
width: 35vh;
padding: 10px 40px;
`
const Wdes = styled.div`
font-size: 40px;
`

const Temp = styled.div`
padding-top: 15px;
`

const Container = styled.div`
display: flex;
justify-content: space-around;
margin-top: 20px;
`

const Button = styled.div`
border: 1px solid black;
text-align: center;
padding-left: 10px;
padding-right: 10px;
height: 100%;
display: flex;
align-items: center;
background: red;
color: white;
margin-top: 15px;
`
const Desc = styled.div`

`


const Weather = (props) => {
  const [nameCity, setNameCity] = useState("");
  const [tempF, setTempF] = useState("");
  const [img, setImg] = useState('');
  const weatherF = tempF * 1.8 + 32;
  const conWeather = Math.trunc(weatherF);
  const [unit, setUnit] = useState('')
  const [descrip, setDescrip] = useState('')

  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lng}&units=metric&appid=4a9339867b7a0458ce8675757cd8ba3e`
    )
      .then((res) => res.json())
      .then((res) => {
        setNameCity(res.name);
        setTempF(res.main.temp);
        setImg(res.weather[0].icon)
        console.log(res);
        console.log(props.lng);
        console.log(props.lat);
        setDescrip(res.weather[0].description)
      });
  };

  let icon = `http://openweathermap.org/img/w/${img}.png`

  const tempC = (conWeather - 32) * 0.5556;
  const conTempC = Math.trunc(tempC);

  useEffect(() => {
    handleClick();
  });

  return (
    <div>
        <IconA>
      <h2>{nameCity} </h2>
      <Img src={icon}></Img>
      </IconA>
      <Container>
          <Desc>{descrip}</Desc>
      <Temp>Temp:</Temp>
      <Wdes>{conWeather}&#8457;</Wdes>
      <Button>C</Button>
      </Container>
    </div>
  );
};

export default Weather;
