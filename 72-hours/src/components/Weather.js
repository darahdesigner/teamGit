import React, {useState} from 'react'

const Weather = (props) => {
    const [nameCity, setNameCity] = useState('');
    const [tempF, setTempF] = useState('');

    const weatherF = ((tempF * 1.8) + 32);
    const conWeather = Math.trunc(weatherF)    

    const handleClick = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lng}&units=metric&appid=4a9339867b7a0458ce8675757cd8ba3e`)
        .then(res => res.json())
        .then(res =>{
            setNameCity(res.name);
            setTempF(res.main.temp)
            console.log(res)
            console.log(props.lng)
            console.log(props.lat)
            
        })
    }

    return (
        <div>
            <h1>{nameCity}</h1>
            <p>{conWeather}&#8457;</p>
            <button onClick = {handleClick}>Weather</button>
        </div>
    )
}

export default Weather
