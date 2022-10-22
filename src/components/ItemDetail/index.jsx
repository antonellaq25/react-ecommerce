import React from "react"
import { useState } from "react";
import { useEffect } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

function ItemDetail(){

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() =>{
        getProduct()
    }, []);

    const getProduct =() => {
        axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
        console.log(res.data);
     setProduct(res.data)})
    .catch( (error) => {
        console.log(error);
    })
    .finally(setLoading(false));
    };
  

    return (
        <>
            {loading ? <h3>Cargando...</h3> :
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
            }
        </>
      
    )
}

export default ItemDetail