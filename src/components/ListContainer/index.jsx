import React from "react"
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { Link, useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../../firebase/firebase"



   
function ListContainer({title}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    //const {id} = useParams();
    

   
    //const productCollection = collection(db, "productos");
    //const q = query(productCollection, 1)

    useEffect(() =>{
        getDocs( collection(db, "productos"))
        .then ((result) =>{  
            const products = result.docs.map((doc) => ({...doc.data(), id:doc.id }));
            setProducts(products);                
            console.log(products, products);
        })
        .finally(setLoading(false));
    }, []);
        

    return(
        <>
            <h3>{title}</h3>
            {loading ? <h3>Cargando...</h3> : <ItemList products={products} />}
            
        </> 
    )
};

export default ListContainer