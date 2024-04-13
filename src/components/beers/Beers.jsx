import React, { useState } from 'react'
import { beers } from '../data/Data'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Available from '../available/Available';

const Beers = () => {
    const conversion = 1000;

    return (
        <>
            <Available />
        </>
    );
}

export default Beers;


