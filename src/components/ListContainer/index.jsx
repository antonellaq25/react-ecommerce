import React from "react"
import { useState } from "react";
import { useEffect } from "react"
import ItemList from "../ItemList";
import axios from "axios";


   
function ListContainer({title}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getProducts()
    }, []);

    const getProducts =() => {
        axios
    .get("https://fakestoreapi.com/products")
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