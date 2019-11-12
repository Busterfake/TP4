import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import Amandine from './profil_image.jpg';
  import { Container, Row, Col } from 'reactstrap';
  import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';



class profil extends Component {

    constructor(props){
        super(props);
        this.state = {
            background : this.props.background
        }
        this.coucouAxelou = this.coucouAxelou.bind(this);
        this.coucouAxelou2 = this.coucouAxelou2.bind(this);
        this.coucouAxelou3 = this.coucouAxelou3.bind(this);

    }

    coucouAxelou() {
        this.setState(state => ({
            background : "#afcafc"
          }));
    }

    coucouAxelou2() {
        this.setState(state => ({
            background : "#54f7ae"
          }));
    }

    coucouAxelou3() {
        this.setState(state => ({
            background : "#ef274d"
          }));
    }

    render() {
        
        return (
            <Container >
                <Row>
                    <Col sm={{size : 4, offset : 4}}>
                        <Card style={{backgroundColor : this.state.background}}>
                            <img  width="100%"  src={Amandine} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Amandine </CardTitle>
                                <CardSubtitle>Rathery</CardSubtitle>
                                <CardText>28/10/1999</CardText>
                                <Button id="PopoverLegacy" type="button">
                                    Launch Popover (Legacy)
                                </Button>
                                <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                                    <PopoverHeader>Changer le style </PopoverHeader>
                                    <PopoverBody> 
                                        <Button outline color="primary" onClick={this.coucouAxelou}>Bleu</Button>
                                        <Button outline color="success" onClick={this.coucouAxelou2}>Vert</Button>
                                        <Button outline color="danger" onClick={this.coucouAxelou3}>Rouge</Button>
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }


}

export default profil;