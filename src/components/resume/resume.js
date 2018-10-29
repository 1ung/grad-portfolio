import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './resume.css';


class Resume extends Component {
    render() {
        return (
            <div className="Resume" id="resume">
            <Row className="education-row">
                <Col sm={4} className="education">
                    <h4 className="education-header">
                    <span className="education-title">EDUCATION</span>
                    </h4>
                </Col>
                <Col sm={8} className="education-col education-intro">
                    <h3>General Assembly</h3>
                    <p className="education-info ga">
                    Web Development Immersive
                    <span> • </span>
                    <em>February 2018-May 2018</em>
                    </p>
                    <p>
                        Full-stack web development program focused on common best practices in object-oriented programming,
                        <br />
                        MVC frameworks, data modeling, and test-driven development.
                        <br />Developed a portfolio of individually focused and collaboratively focused projects.
                    </p>
                    <h3>Ping Yi Secondary School</h3>
                    <p className="education-info pyss">
                    GCE 'O' Levels
                    <span> • </span>
                    <em>January 2008-December 2014</em>
                    </p>
                </Col>
            </Row>
            <Row className="work-row">
                <Col sm={4} className="work">
                    <h4 className="work-header">
                    <span className="work-title">WORK</span>
                    </h4>
                </Col>
                <Col sm={8} className="work-col work-intro">
                    <h3>Debug IT Solutions Pte Ltd</h3>
                    <p className="work-info ga">
                    IT Programmer
                    <span> • </span>
                    <em>June 2018-September 2018</em>
                    </p>
                    <p>
                    Building various websites for businesses/companies including start-ups.
                    <br />
                    Mainly in-charge of front-end and designs using WordPress.
                    </p>
                    <h3>Hotel 81 Management Pte Ltd</h3>
                    <p className="work-info pyss">
                    Junior Executive
                    <span> • </span>
                    <em>April 2017-June 2017</em>
                    </p>
                    <p>
                    Executing all duties related to the hotel’s front office operations, such as
                    <br />
                    registration of guests during check in, checking/verifying guests particulars,
                    <br />
                    updating of room status, departure calls/checks etc.
                    <br />
                    Cashiering duties (Compute and collect applicable rates from guests)
                    <br />
                    including trial balance and shift closing. Answering to guests inquiries and
                    <br />
                    rendering reasonable assistance/services with expectation of the hospitality industry.
                    </p>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Resume;
