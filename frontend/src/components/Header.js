import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const ScrollListener = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
};

function Header() {
  const isScrolled = ScrollListener();

  return (
    <div>
      <Navbar
        expand="lg"
        className={`navbar ${isScrolled ? 'bg-light shadow-sm navbar-light' : 'navbar-dark'} fixed-top`}
        variant="primary"
      >
        <div className='container-xxl'>
          <Navbar.Brand className={`text-2xl ${isScrolled ? 'text-primary' : 'text-light'}`} href="#home">
            <a href='/'><img style={{width: '100px'}} src={`${isScrolled ? 'black.png' : 'white.png'}`} alt='logo'/></a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pt-3">
            <Nav.Link
                className={`text-uppercase ${isScrolled ? 'text-primary' : 'text-light'}`}
                href="#about us"
              >
                About us
              </Nav.Link>
              <Nav.Link
                className={`text-primary text-uppercase ${isScrolled ? 'text-primary' : 'text-light'}`}
                href="#services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className={`text-primary text-uppercase ${isScrolled ? 'text-primary' : 'text-light'}`}
                href="#Transactions"
              >
                Transactions
              </Nav.Link>
              <Nav.Link
                className={`text-primary text-uppercase ${isScrolled ? 'text-primary' : 'text-light'}`}
                href="#Team"
              >
                Team
              </Nav.Link>
              <Nav.Link
                className={`text-primary text-uppercase ${isScrolled ? 'text-primary' : 'text-light'}`}
                href="#Team"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
