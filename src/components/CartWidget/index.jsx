import React from "react"
import * as Icon from 'react-bootstrap-icons';
import './style.css'

function CartWidget({count}){
    return (
        
        <div class="my-cart"> 
            <Icon.Cart3 />
            <span class="count">{count}</span>  
        </div>
    )
}

export default CartWidget