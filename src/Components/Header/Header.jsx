import React from 'react'
import { Container, Navbar, NavLink, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

export const Header = () => {
  return (
    <div>
        <Navbar className='bg-secondary' fixed='top'>
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Roman Orekhovskyi</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavLink>
              <Link to='home'
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                Home
              </Link>
            </NavLink>
            <NavLink>
              <Link to='about'
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                About me
              </Link>
            </NavLink>
            <NavLink>
              <Link to='education'
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                My education
              </Link>
            </NavLink>
            <NavLink>My experience</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Contact</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
