import React from "react"
import { useState } from "react";
import { useEffect } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { CustomContext} from "../../../src/Context/CustomContext"

function ItemDetail(){

    const {products} = CustomContext();
    const {id} = useParams();
    const [product, setProducts] = useState({});
    

    useEffect(() =>{
        let p = products.filter( prod => prod.id = id)
        setProducts(p[0]) 
  
    }, [id]);

    

    return (
        <Card key={product.id} style={{ width: '30rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Link to={`/products/${product.id}`}>Comprar</Link>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail