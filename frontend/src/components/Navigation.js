import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll'
import Hero from './Hero';
import About from './About';
import InfoSection1 from './InfoSection1';
import Services from './Services';
import Transactions from './Transactions';
import Team from './Team';
import Contact from './Contact';
import InfoSection2 from './InfoSection2';

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

function Navigation() {
  const isScrolled = ScrollListener();

  return (
    <div>
      <Navbar
        expand="lg"
        className={`navbar ${
          isScrolled ? "bg-light shadow-sm navbar-light" : "navbar-dark"
        } fixed-top`}
        variant="primary"
      >
        <div className="navbar-content container-fluid">
          <Navbar.Brand
            className={`text-2xl ${isScrolled ? "text-primary" : "text-light"}`}
            href="#hero"
          >
            <Link
            to='hero'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              <img
                style={{ width: "100px" }}
                src={`${isScrolled ? "black.png" : "white.png"}`}
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={`${isScrolled ? "" : "dark-bg"}`}>
            <Nav className="ms-auto pt-3">
              <Nav.Link
                className={`text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#about"
              >
                <Link
                  activeClass="active-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  About us
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`text-dark text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#services"
              >
                <Link
                  activeClass="active-link"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`text-dark text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#Transactions"
              >
               <Link
                  activeClass="active-link"
                  to="transactions"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  Transactions
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`text-dark text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#Team"
              >
                <Link
                  activeClass="active-link"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  Team
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`text-dark text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#Team"
              >
                <Link
                  activeClass="active-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Hero />
      <InfoSection1 />
      <About />
      <Services />
      <Transactions/>
      <InfoSection2/>
      <Team />
      <Contact />
    </div>
  );
}

export default Navigation;
