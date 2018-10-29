import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import './App.css';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
        <header className="App-header">
          <Navbar className="navbar-fixed-top nav-bar">
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="nav" id="nav">
                <NavItem eventKey={1} href="#app" className="nav-item">HOME</NavItem>
                <NavItem eventKey={2} href="#about" className="nav-item">ABOUT</NavItem>
                <NavItem eventKey={3} href="#resume" className="nav-item">RESUME</NavItem>
                <NavItem eventKey={4} href="#works" className="nav-item">WORKS</NavItem>
                <NavItem eventKey={6} href="#contact" className="nav-item">CONTACT</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            <Row>
              <Col>
                <div className="typewriter">
                  <h1 className="intro-name">I'm Erwin Lee.</h1>
                </div>
                <h3 className="brief-intro">
                  I'm a Singapore based <span className="jwd">junior web developer</span>, looking to take on new and interesting projects using new frameworks under great mentorship guidance.
                </h3>
                <hr />
                <ul class="social">
                  <li><a href="https://www.facebook.com/erwinlyyy" className="social-links"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/Erwinlyyy" className="social-links"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/erwin-lee/" className="social-links"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://www.instagram.com/erwinlyyy/" className="social-links"><i class="fab fa-instagram"></i></a></li>
                </ul>
                <p class="scrolldown">
                  <a class="smoothscroll bounce" href="#about"><i class="fas fa-chevron-circle-down"></i></a>
                </p>
              </Col>
            </Row>
        </header>
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
