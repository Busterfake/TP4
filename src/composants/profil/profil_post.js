import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Amandine from './profil_image.jpg';
  import { Container, Row, Col } from 'reactstrap';
  import './profil_post.css';



class profil_post extends Component {
    render() {
        return (
          
                  
 
                    <Container className= "sarah_pelle"> 
                    <Row>
                        <Col sm={{size : 10, offset : 1}}>
      <Card  >
    
        <CardBody>
        <Row>
                    <Col sm={{size : 3, offset : 1}}>
        <img  className= "sarah" width="70%"  src={Amandine} alt="Generic placeholder image" />
        </Col>
        </Row>
          <CardTitle>Amandine Rathery</CardTitle> 
          <CardText>Je stresse trop pour mes TPs je veux absolument avoir le Canada !! lol</CardText>
          <Button>Super !</Button>
        </CardBody>
      </Card>
      </Col>
            </Row>
            </Container>
           
        );
    }
}

export default profil_post;