import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import { Calculator } from '../Portfolio/Calculator'

export const Portfolio = () => {
  return (
    <div className='pages' id='portfolio' style={{backgroundColor:"blue"}}>
      <Container>
          Portfolio <br/>
          <Link to='/calculator'>Calculator</Link>
      </Container>
    </div>
  )
}
