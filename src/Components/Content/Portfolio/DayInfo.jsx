import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

export const DayInfo = () => {
    // Get API key from https://openweathermap.org
    let apiKey = '7cdcdd81fabe39df2687dadff1df2073'

    // Get current user geolocation position
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    navigator.geolocation.getCurrentPosition((success) => {
        setLat(success.coords.latitude)
        setLon(success.coords.longitude)
    })
    
    // // Get API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    
    // Fetch API using axios
    const [apiResult, setApiResult] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axios.get(apiUrl).then(res => {
            setApiResult(res.data);
            setLoading(true)
        })
        .catch(err => console.log(err))
    }, [lat, lon])

    // Create weather card
    const WeatherCard = () => {
        return (
            <div className='weatherCard'>
                
            </div>
        )
    }

  return (
    <div className='mt-5 mb-3 pt-3'>
        <Container>
            DayInfo <br />
            {apiUrl} <br />
            {loading ? <h2>{apiResult.name}</h2> : <h1>Loading....</h1>}
        </Container>
        
    </div>
  )
}
