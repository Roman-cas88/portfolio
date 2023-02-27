import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

export const Header = () => {
  return (
    <div>
        <Navbar className='bg-secondary' fixed='top'>
        <Container>
          <Navbar.Brand className='logo'><NavLink to='/' style={{all:"unset", cursor:'pointer'}}>Roman Orekhovskyi</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1">
              <Link to='home'
                    activeClass="active" 
                    spy={true}
                    >
                Home
              </Link>
              <Link to='about'
                    activeClass="active" 
                    spy={true}
                    >
                About me
              </Link>
              <Link to='education'
                    activeClass="active" 
                    spy={true}
                    >
                My education
              </Link>
              <Link to='expirience'
                      activeClass="active" 
                      spy={true}
                      >
                My experience
              </Link>
              <Link to='portfolio'
                      activeClass="active" 
                      spy={true}
                      >
                Portfolio
              </Link>
              <Link to='contact'
                      activeClass="active" 
                      spy={true}
                      >
                Contact
              </Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
