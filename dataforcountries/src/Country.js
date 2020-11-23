import React, { useEffect, useState } from 'react'
import axios from "axios"

const Country = ({ country }) => {
    const [weather, setWeather] = useState()
    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        console.log(api_key)
        const promise = axios.get(`http://api.weatherstack.com/current?access_key=0a691c15db7821ee41783107cae604ac&query=${country.capital}&units=m`)
        promise.then(response => {
            console.log(response.data)
            setWeather(response.data)
        })
    }, [])

    console.log(country)
    const languages = country.languages.map((language, i) => {
        return (
            <li key={i}>
                {language.name}
            </li>
        )
    })
    console.log(weather)
    return (
        <>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>

            <h2>languages</h2>
            <ul>
                {languages}
            </ul>
            <img style={{ height: "200px", width: "200px" }} src={country.flag}></img>

            <h2>Weather in {country.capital}</h2>
            {weather ?
                <>
                    <p> temperature: {weather.current.temperature} Celcius</p>
                    <img src={weather.current.weather_icons[0]} />
                    <p> wind: {weather.current.wind_speed} mph direction {weather.current.winD_dir}</p>
                </>
                : null}
        </>
    )
}

export default Country