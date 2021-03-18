import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { ProductConsumer } from '../contextAPI';

export default class Product extends Component {
    render(){
        const { id, title, img, price, inCart}= this.props.product;
        return(
            <div className="col-9 mx-auto col-md-6 col-lg-3">
                <ProductConsumer>
                    {(value) => (
                        <Card onClick={() =>{ value.handleDetails(id)}} style = {{ width: '18rem', height:'18rem'}}>
                            <Link to="/details">
                                <Card.Img variant="top" src={img} />
                            </Link>
                            <Card.Body>
                                <Card.Title> {title} </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col>
                                        <Button size="sm" disabled={inCart} onClick={()=> {value.addToCart(id)}} variant="secondary">
                                            {inCart=== true ? (<span> In Cart</span>) : (<span>Add to cart</span>)}
                                        </Button>
                                    </Col>
                                    <Col>
                                        <small className="text-muted text-right"> INR {price} </small>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    )}
                </ProductConsumer>
            </div>
        )
    }
}