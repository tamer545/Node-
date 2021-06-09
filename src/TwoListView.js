import {Button, Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import {useState} from "react";


export default function BootstrapBsp() {

    const motos = [
        {title: 'Aprilia SX 125'},
        {title: 'Beta RR 125 LC'},
        {title: 'KTM Duke 125'}
    ]

    const motos2 = [
        {title: 'BMW S1000'},
        {title: 'KTM SMCR 690'},
        {title: 'HUSQVARNA 701'}
    ]

    return (
        <div>
            <Container>
                <Row>
                    <br/>
                    <br/>
                    <br/>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {motos.map((bike, index) => <ListGroup.Item action href={'#' + bike.title}
                                                                        key={index}>{bike.title}</ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                    <Col>
                        <Button>>></Button>
                        <br/>
                        <Button>></Button>
                    </Col>
                    <Col>
                        <ListGroup>
                            {motos2.map((bike, index) => <ListGroup.Item action href={'#' + bike.title}
                                                                         key={index}>{bike.title}</ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    );

}
