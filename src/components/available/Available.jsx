import React, { useState } from 'react';
import { beers } from '../data/Data';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';

const Available = () => {
    const conversion = 1000;

    const [filteredBeers, setFilteredBeers] = useState(false);

    const handleAvailableButton = () => {
        setFilteredBeers(!filteredBeers);
    };

    const availableBeers = filteredBeers ? beers.filter(beer => beer.available) : beers;

    return (
        <Container className='border rounded bg-dark'>
            <h1 className="text-light">Cervezas: </h1>
            <Row>
                {availableBeers.map(beer => (
                    <Col key={beer.id} className='mb-2 text-light' md={4}>
                        <ListGroup className='mb-2'>
                            <ListGroup.Item>{beer.beerName}</ListGroup.Item>
                            <ListGroup.Item>{beer.beerStyle}</ListGroup.Item>
                            <ListGroup.Item>{beer.price * conversion}</ListGroup.Item>
                            <ListGroup.Item>{beer.name} - {beer.available ? 'Disponible' : 'No disponible'}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                ))}
            </Row>
            <Button className="btn btn-warning mb-3" onClick={handleAvailableButton}>Filtrar solo disponible</Button>
        </Container >
    );
}

export default Available;