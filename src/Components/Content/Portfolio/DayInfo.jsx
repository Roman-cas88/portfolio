import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GoLocation } from 'react-icons/go';
import { AiTwotoneCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import axios from 'axios'
import Clock from 'react-live-clock';

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
        const controller = new AbortController()
        const signal = controller.signal

        const fetchData = async () => {
            try {
                const res = await axios.get(
                    apiUrl, 
                    {
                        signal: signal,
                    }
                )
                setApiResult(res.data);
                setLoading(true)
            } catch(err) {console.log(err)}
        }
        fetchData()
        return () => {
            controller.abort()
        }
    }, [apiUrl])

    // Get current date
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date()
    let dayOfMonth = date.getDate()
    let day = days[date.getDay()]
    let month = months[date.getMonth()]
    let year = date.getFullYear()

    // Create weather card
    // Styles for card
    const weatherCardStyle = {
        backgroundColor: "lightblue",
        borderRadius:"20px",
        padding:"10px",
        fontFamily:"Garamond",
        fontSize:"large",
        fontWeight:"bold"
    }
    const locationStyle = {

    }
    const dateStyle = {

    }
    const tempStyle = {
        padding:"20px 0 22px"
    }
    const iconStyle = {

    }

    // Card component
    const WeatherCard = () => {
        return (
            <div style={weatherCardStyle}>
                <Row>
                    <Col style={locationStyle} className="text-center">
                            <GoLocation className='mb-1 me-1' size={15}/>
                            {apiResult.name}
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <div className='h1 fw-bold' style={tempStyle}>
                            {Math.round(apiResult.main.temp)}°C
                        </div>
                    </Col>
                    <Col className='text-center mt-4'>
                        <div style={dateStyle}>
                            <AiTwotoneCalendar className='mb-1 me-1'/> 
                            {day} <br /> 
                            {dayOfMonth} {month} {year} 
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div style={iconStyle}>
                            <img 
                            src={`https://openweathermap.org/img/wn/${apiResult.weather[0].icon}@2x.png`} 
                            alt={apiResult.weather[0].main}/>
                        </div>
                        <div className='h6'>
                        </div>
                    </Col>
                </Row>
                <Row className='h6 text-center'>
                    <Col>
                        Feels Like {Math.round(apiResult.main.feels_like)}°C
                    </Col>
                    <Col>
                        <AiOutlineClockCircle className='me-1 mb-1'/>
                        <Clock  
                            format={'HH:mm'} 
                            ticking={true} 
                            interval={30000}
                            />
                    </Col>
                    <Col>
                        {apiResult.weather[0].description}
                    </Col>
                </Row>
            </div>
        )
    }
  return (
    <div className='mt-5 mb-3 pt-3'>
        <Container>
            {loading ? <WeatherCard /> : <h1>Loading....</h1>}
        </Container>
        
    </div>
  )
}
