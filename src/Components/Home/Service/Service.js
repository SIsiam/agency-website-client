import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { _id, image, name, details } = service;
    return (
        <div className="">
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/order/${_id}`}>
                <Card key={_id} style={{ width: '20rem', align: 'center' }} className="text-center bg-light service">
                    <Card.Body>
                        <Card.Img variant="top" className="image-fluid mb-4 w-100 service-img " src={`data:image/png;base64,${image.img}`} />
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{details}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>

    );
};

export default Service;