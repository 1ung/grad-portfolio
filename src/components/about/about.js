import React, { Component } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import './about.css';


class About extends Component {
    render() {
        return (
            <div className="About" id="about">
            <Row className="about-row">
                <Col sm={4} className="about-col">
                    <Image src="images/my-profile-pic.jpg" circle />
                </Col>
                <Col sm={8} className="about-col about-intro">
                    <h3 className="about-header">About Me</h3>
                    <p className="about-text">
                    I'm a former pro gamer turned programmer and a creative technologist with a passion for gaming.
                    <br />
                    Still green to the tech industry, I'm looking to disrupt old ways of thinking, one project at a time.
                    <br />
                    I hope to incorporate my soft skills as a professional gamer and achieve even greater results than before.
                    <br />
                    I love building things. While hard engineering problems are often intrinsically fun to tackle,
                    <br />
                    I'm most attracted to solving real customer problems with a business justification.
                    <br />
                    I'm looking for a junior developer role where I can take on collaborative team projects,
                    <br />
                    and gain experience under the wings of great mentors.
                    </p>
                    <Col sm={4} className="contact-details">
                        <h3 className="about-header">Contact Details</h3>
                        <p className="about-text">
                        <p>Erwin Lee</p>
                        <p>+65 81137288</p>
                        <p>erwin.leewh@gmail.com</p>
                        </p>
                    </Col>
                    <Col sm={8} className="download-resume">
                        <a href="/My-Resume.pdf"><Button bsStyle="primary" bsSize="large" className="download-btn">
                        <i class="fas fa-download"></i>
                            <span className="resume-span">Download Resume</span>
                        </Button></a>
                    </Col>
                </Col>
            </Row>
            </div>
        );
    }
}

export default About;
