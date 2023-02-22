import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss'

const Navbars = () => {
  const [htoggle, sethToggle] = useState(false)
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Link to='/'> <img src={require('../../assets/blogo.png')}
          className="animate__animated animate__swing animate__infinite"
           alt="error" />  </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => sethToggle(!htoggle)}
            className={`hamburger hamburger--collapse d-lg-none ${htoggle && 'is-active'}`} >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
              <NavLink
                className='me-4 nav-link' to='/'
                style={({ isActive }) => ({ color: isActive ? '#8cc63f' : '#545e6f' })} end >
                Home
              </NavLink>
              <NavLink
                className='me-4 nav-link' to='/about'
                style={({ isActive }) => ({ color: isActive ? '#8cc63f' : '#545e6f' })} >
                About
              </NavLink>
              <NavLink
                className='me-4 nav-link' to='/contact'
                style={({ isActive }) => ({ color: isActive ? '#8cc63f' : '#545e6f' })} >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars