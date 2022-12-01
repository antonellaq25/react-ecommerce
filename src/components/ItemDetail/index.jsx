import { React, useEffect, useState, useContext, } from "react";
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Context} from "../../../src/Context/CustomContext"

function ItemDetail(){
    const {products, addItem} = useContext(Context);
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const handleClick = () => addItem(product,1);
    
    useEffect(() =>{
        let p = products.find( prod => prod.id == id)
        console.log( p)
        console.log(id)
        setProduct(p) 
  
    }, [id]);

    return (
        <Container >
            <Row className="justify-content-lg-center">
                <Col lg="auto">
                    <Card key={product.id} style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="outline-primary" onClick={handleClick} >
                                <Link to={`/products/${product.id}`} >Comprar</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       
    )
}

export default ItemDetail