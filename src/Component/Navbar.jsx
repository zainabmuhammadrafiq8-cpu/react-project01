// import React, { useState } from "react";
// import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";

// const Navbar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const closeMenu = () => {
//     setExpanded(false);
//   };

//   return (
//     <BSNavbar
//       expand="lg"
//       expanded={expanded}
//       onToggle={setExpanded}
//       className="studio-navbar"
//     >
//       <Container>

//         <div className="studio-navbar-inner">

//           {/* ================= LOGO ================= */}
//           <BSNavbar.Brand
//             href="#home"
//             className="studio-brand"
//             onClick={closeMenu}
//           >
//             <div className="studio-brand-name">
//               ZR
//             </div>

//             <div className="studio-brand-subtitle">
//               STITCH STUDIO
//             </div>
//           </BSNavbar.Brand>


//           {/* ================= MOBILE BUTTON ================= */}
//           <BSNavbar.Toggle
//             aria-controls="studio-navbar-menu"
//             className="studio-toggle"
//           />


//           {/* ================= MENU ================= */}
//           <BSNavbar.Collapse
//             id="studio-navbar-menu"
//             className="studio-collapse"
//           >
//             <Nav
//               className="studio-nav-links"
//               onSelect={closeMenu}
//             >

//               <Nav.Link
//                 eventKey="home"
//                 href="#home"
//                 className="studio-nav-link active"
//               >
//                 Home
//               </Nav.Link>

//               <Nav.Link
//                 eventKey="services"
//                 href="#services"
//                 className="studio-nav-link"
//               >
//                 Services
//               </Nav.Link>

//               <Nav.Link
//                 eventKey="gallery"
//                 href="#gallery"
//                 className="studio-nav-link"
//               >
//                 Gallery
//               </Nav.Link>

//               <Nav.Link
//                 eventKey="pricing"
//                 href="#pricing"
//                 className="studio-nav-link"
//               >
//                 Pricing
//               </Nav.Link>

//               <Nav.Link
//                 eventKey="testimonials"
//                 href="#testimonials"
//                 className="studio-nav-link"
//               >
//                 Testimonials
//               </Nav.Link>

//               <Nav.Link
//                 eventKey="contact"
//                 href="#contact"
//                 className="studio-nav-link"
//               >
//                 Contact
//               </Nav.Link>

//               <Nav.Link
//                 eventKey="booking"
//                 href="#booking"
//                 className="studio-book-btn"
//               >
//                 Book Consultation
//               </Nav.Link>

//             </Nav>
//           </BSNavbar.Collapse>

//         </div>

//       </Container>
//     </BSNavbar>
//   );
// };

// export default Navbar;

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
              Pricing
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