import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const ZRNavbar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <Navbar  id='home' expand="lg" fixed="top" className="zr-navbar shadow-sm ">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand href="#home" className="zr-brand">
          <span className="zr-brand-title">ZR</span>
          <span className="zr-brand-subtitle">STITCH STUDIO</span>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="zr-navbar-nav" />

        {/* Navigation Items */}
        <Navbar.Collapse id="zr-navbar-nav">
          <Nav  className="mx-auto align-items-lg-center">
            <Nav.Link  href="#home"  className={activeLink === '#home' ? 'active' : ''}onClick={() => setActiveLink('#home')}>
              Home
            </Nav.Link>

            <Nav.Link 
              href="#services" 
              className={activeLink === '#services' ? 'active' : ''}
              onClick={() => setActiveLink('#services')}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              href="#gallery" 
              className={activeLink === '#gallery' ? 'active' : ''}
              onClick={() => setActiveLink('#gallery')}
            >
              Gallery
            </Nav.Link>
            <Nav.Link 
              href="#pricing" 
              className={activeLink === '#pricing' ? 'active' : ''}
              onClick={() => setActiveLink('#pricing')}
            >
              Packages
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={activeLink === '#about' ? 'active' : ''}
              onClick={() => setActiveLink('#about')}
            >
             About
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              className={activeLink === '#contact' ? 'active' : ''}
              onClick={() => setActiveLink('#contact')}
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* Consultation CTA */}
          <Nav>
            <Button 
              href="#consultation" 
              className="primary-button " 
              onClick={() => setActiveLink('#consultation')}
            >
              Book Consultation
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ZRNavbar;