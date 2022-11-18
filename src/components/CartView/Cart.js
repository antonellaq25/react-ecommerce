import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./cart.css ";
import {db} from "../../firebase/firebase"
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore"

export const Cart = ({estilo, color}) => {
    const {cart,total} = useContext(Context);

    const comprador ={
        nombre: usuario1,
        apellido:usua1,
        email:'usuario1@gmail.com'
    }

    const finalizarCompra = ()=>{
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            comprador,
            items:[{nombre:'sth'},{nombre:'sb'}],
            total:200,
            date:serverTimestamp()
    });
    };

    return (
        <>
        {cart.length === 0 ? (
            <>
            <h1 className={estilo ? "red" : "green"}>
                No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
            </h1>
            <h2 className={`tamanio ${color} || ''}`}>Gracias por tu visita</h2>
            </>
        ) : (
            <>
            {cart.map( (producto) =>
            <h1 key={producto.id}>{producto.title}</h1>)}
        ))
        </>
    
    )}
    
    </>)};
