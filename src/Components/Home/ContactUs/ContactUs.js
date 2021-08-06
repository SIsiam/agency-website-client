import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className="mb-5 mt-5 p-5" style={{ background: 'linear-gradient(55deg, #212121 0%, #212121 40%, #323232 calc(40% + 1px), #323232 60%, #008F95 calc(60% + 1px), #008F95 70%, #14FFEC calc(70% + 1px), #14FFEC 100%)', borderRadius: '20px' }}>
            <h2 id="contactUs" className="text-center mb-3 p-3" style={{ color: '#00FFFF' }}>Contact Us</h2>
            <div className="d-flex flex-wrap mt-5" >
                <div className="col-md-6 col-sm-6 container container-fluid">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" className="p-4" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Your name:</Form.Label>
                            <Form.Control type="name" placeholder="Your name or company name" className="p-4" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message:</Form.Label>
                            <Form.Control as="textarea" rows={8} placeholder="Your message" />
                            <Button variant="light" type="submit" style={{ borderRadius: "5px" }} className="mb-5 mt-3 pr-5 pl-5">Submit</Button>
                        </Form.Group>
                    </Form>
                </div>

            </div>

        </div>
    );
};

export default ContactUs;

