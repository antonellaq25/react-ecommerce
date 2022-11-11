import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import './style.css'
import { Link, NavLink, useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail";
import {getDoc, collection, doc}from "firebase/firestore"
import {db} from "../../firebase/firebase"

   
   
function ItemDetailContainer({greetings}){

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  
    useEffect(() =>{
        const productCollection = collection(db, 'productos');
        const refDoc = doc(productCollection, id);

        getDoc(refDoc)
        .then(result => {
          setProduct({
            id: result.id,
            ...result.data(),

          });
        })
        .catch( (error) => {
          console.log(error);
      })
      .finally(setLoading(false));
    });


    return (
      <>
      {loading && <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Link to={`/products/${product.id}`}>Comprar</Link>
        </Card.Body>
      </Card>}
      </>
      
    )
};

export default ItemDetailContainer