import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Portfolio = () => {
  return (
    <div className='pages' id='portfolio' style={{backgroundColor:"blue"}}>
      <Container>
          Portfolio <br/>
          <Link to='/calculator'>Calculator</Link> <br />
          <Link to='/day-info'>Day Info</Link> <br />
          <Link to='/registration'>Registaration</Link>
      </Container>
    </div>
  )
}
