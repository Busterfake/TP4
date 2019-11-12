import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Amandine from './profil_image.jpg';
  import { Container, Row, Col } from 'reactstrap';


class profil extends Component {
    render() {
        return (
            <Container >
                <Row>
                    <Col sm={{size : 4, offset : 4}}>
            <Card>
                <img  width="100%"  src={Amandine} alt="Card image cap" />
                <CardBody>
                <CardTitle>Amandine </CardTitle>
                <CardSubtitle>Rathery</CardSubtitle>
                <CardText>28/10/1999</CardText>
                <Button>Changer style</Button>
                </CardBody>
            </Card>
            </Col>
            </Row>
            </Container>
        );
    }
}

export default profil;