import React from 'react'
import { Container } from 'react-bootstrap'

export const Home = () => {
  return (
    <Container className='mt-5 pt-5' style={{height:"100vh", backgroundColor:"grey"}} id="home">
            <h1>Hello, my name is Roman Orekhovskyi</h1>
            <h2>This is my own website about me</h2> 
    </Container>
  )
}
