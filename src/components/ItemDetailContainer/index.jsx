import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
import { Link, NavLink } from 'react-router-dom';
function ItemDetailContainer({product}){
  

    return (
      <Card key={product.id} style={{ width: '18rem' }}>
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

export default ItemDetailContainer