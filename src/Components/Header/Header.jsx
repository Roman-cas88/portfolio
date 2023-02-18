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
                    spy={true}>
                Home
              </Link>
            </NavLink>
            <NavLink>
              <Link to='about'
                    activeClass="active" 
                    spy={true}>
                About me
              </Link>
            </NavLink>
            <NavLink>
              <Link to='education'
                    activeClass="active" 
                    spy={true}>
                My education
              </Link>
            </NavLink>
            <NavLink>
              <Link to='expirience'
                      activeClass="active" 
                      spy={true}>
                My experience
              </Link>
            </NavLink>
            <NavLink>
              <Link to='portfolio'
                      activeClass="active" 
                      spy={true}>
                Portfolio
              </Link>
            </NavLink>
            <NavLink>
              <Link to='contact'
                      activeClass="active" 
                      spy={true}>
                Contact
              </Link>
            </NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
