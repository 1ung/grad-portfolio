import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './contact.css';


class Contact extends Component {
    render() {
        return (
            <div className="Contact" id="contact">
                <Row className="contact-row contact-header">
                    <Col sm={2} className="contact-left envelope-icon">
                        <i class="fas fa-envelope"></i>
                    </Col>
                    <Col sm={10} className="contact-right">
                        Feel free to contact me with any inquiries, or just to say “hi.” 
                    </Col>
                </Row>
                <Row className="contact-form-row">
                <Col sm={8} className="contact-left contact-form-left">
                    <form method="POST" action="https://formspree.io/erwin.leewh@gmail.com">
                        <Col className="form-col">
                        <label>Name <span class="required">*</span></label>
                        <input type="text" name="name"></input>
                        </Col>
                        <Col className="form-col">
                        <label>Email <span class="required">*</span></label>
                        <input type="email" name="email"></input>
                        </Col>
                        <Col className="form-col">
                        <label>Subject</label>
                        <input type="text" name="subject"></input>
                        </Col>
                        <Col className="form-col">
                        <label>Message <span class="required">*</span></label>
                        <textarea name="message"></textarea>
                        </Col>
                        <Col className="form-col">
                        <button type="submit" className="form-submit">Submit</button>
                        </Col>
                    </form>
                </Col>
                <Col sm={4} className="contact-form-right">
                    <h4 className="address-header">Address and Phone</h4>
                    <p className="address">
                        <p>Erwin Lee</p>
                        <p>Simei Street 4 Block 232</p>
                        <p>Singapore, 520232</p>
                        <span>(+65) 8113 7288</span>
                    </p>
                </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;
