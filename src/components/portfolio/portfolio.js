import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import './portfolio.css';


class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio" id="works">
                <h4 className="project-title">PAST PROJECTS</h4>
                <Row className="portfolio-row">
                    <Col sm={3}>
                        <Thumbnail href="https://debug.sg/" alt="Debug IT Solutions Pte Ltd" src="/images/debug-logo.jpeg" />
                    </Col>
                    <Col sm={3}>
                        <Thumbnail href="http://level.com.sg/" alt="Level SG" src="/images/Level-LogoV2.png" />
                    </Col>
                    <Col sm={3}>
                        <Thumbnail href="https://vibesfx.com/" alt="VibesFX" src="/images/vibesfx-logo.jpg" />
                    </Col>
                    <Col sm={3}>
                        <Thumbnail href="http://jadescapeshunfuhome.com/" alt="Jade Scape" src="/images/jadescape-logo.png" />
                    </Col>
                </Row>
                <Row className="portfolio-row">
                    <Col sm={3}>
                        <Thumbnail href="http://propease.io/" alt="Propease Network" src="/images/propease-logo.png" />
                    </Col>
                    {/* <Col sm={3}>
                        <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                    </Col>
                    <Col sm={3}>
                        <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                    </Col>
                    <Col sm={3}>
                        <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                    </Col> */}
                </Row>
            </div>
        );
    }
}

export default Portfolio;
