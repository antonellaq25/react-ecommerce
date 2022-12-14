import React from "react"
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { Link, useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../../firebase/firebase"
import { CustomContext} from "../../../src/Context/CustomContext"


   
function ListContainer({title}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const {setProductsInContext} = CustomContext();
    
 
    useEffect(() =>{
          
    if (id) {
        const productCollection = collection(db, 'productos');
        var q = query(productCollection, where('category', '==', id))
        
    }else {
        const productCollection = collection(db, 'productos');
        var q = productCollection;
    }

        getDocs(q)
        .then ((result) =>{  
            const products = result.docs.map((doc) => ({...doc.data(), id:doc.id }));
            setProducts(products); 
            setProductsInContext(products)               
            console.log(products, products);
        })
        .finally(setLoading(false));
    }, [id]);
        

    return(
        <>
            <h3>{title}</h3>
            {loading ? <h3>Cargando...</h3> : <ItemList products={products} />}
            
        </> 
    )
};

export default ListContainer