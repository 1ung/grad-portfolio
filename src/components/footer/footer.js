import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="Footer" id="footer">
            <Row className="footer-row">
                <Col>
                    <ul class="social-links-footer">
                        <li><a href="https://www.facebook.com/erwinlyyy" className="social-links-footer"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/Erwinlyyy" className="social-links-footer twitter"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/erwin-lee/" className="social-links-footer linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://www.instagram.com/erwinlyyy/" className="social-links-footer instagram"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                    <ul class="copyright">
                        <li>© Copyright 2018 Erwin Lee</li>
                    </ul>
                </Col>
                <div id="go-top">
                    <a class="arrow-up" title="Back to Top" href="#app"><i class="fas fa-chevron-circle-up"></i></a>
                </div>
            </Row>
            </div>
        );
    }
}

export default Footer;
