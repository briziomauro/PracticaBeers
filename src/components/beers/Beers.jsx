import React from 'react'
import { beers } from '../data/Data'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Beers = () => {

    const conversion = 1000;

    return (
        <>
            <Container className='border rounded bg-dark'>
                <h1 className="text-light">Cervezas: </h1>
                <Row>
                    {beers.map((beer) => {
                        let priceInARS = (beer.price * conversion);
                        return (
                            <Col key={beer.id} md={4} className='mb-2 text-light'>
                                <ListGroup className='mb-2'>
                                    <ListGroup.Item className='mb-1'>{beer.beerName}</ListGroup.Item>
                                    <ListGroup.Item>{beer.beerStyle}</ListGroup.Item>
                                    <ListGroup.Item>{priceInARS}</ListGroup.Item>
                                    <ListGroup.Item>{beer.available ? 'Disponible' : 'No disponible'}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>

    );
}

export default Beers


