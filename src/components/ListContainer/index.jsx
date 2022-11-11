import React from "react"
import { useState } from "react";
import { useEffect } from "react"
import ItemList from "../ItemList";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import {getDocs, collection, query, where}from "firebase/firestore"
import {db} from "../../firebase/firebase"



   
function ListContainer({title}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


   
    const productCollection = collection(db, 'productos');
    const q = query(productCollection, where('category', '==', "men's clothing"))

    useEffect(() =>{
        getDocs(productCollection)
        .then ((result) =>{  
              const listProducts =  result.docs.map(item => {
              return {
                ...item.data(),
                id: item.id,
              };
            });
            
            setProducts(listProducts);
        })
        .catch( (error) => {
            console.log(error);
        })
        .finally(setLoading(false));
    });
        

    return(
        <>
            <h3>{title}</h3>
            {loading ? <h3>Cargando...</h3> : <ItemList products={products} />}
            
        </> 
    )
};

export default ListContainer