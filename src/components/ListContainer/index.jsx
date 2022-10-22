import React from "react"
import { useState } from "react";
import { useEffect } from "react"
import ItemList from "../ItemList";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';



   
function ListContainer({title}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    if (id) {
        var url = `https://fakestoreapi.com/products/category/${id}`
    }  else{
        var url = "https://fakestoreapi.com/products"
    };
   

    useEffect(() =>{
        
        getProducts()
    }, [id]);

    const getProducts =() => {
        axios
    .get(url)
    .then((res) => {
     setProducts(res.data)})
    .catch( (error) => {
        console.log(error);
    })
    .finally(setLoading(false));
    };
    return(
        <>
            <h3>{title}</h3>
            {loading ? <h3>Cargando...</h3> : <ItemList products={products} />}
            
        </>
    )
}

export default ListContainer