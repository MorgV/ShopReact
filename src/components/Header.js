import React, { useState } from 'react'
import { BsFillBasket3Fill } from "react-icons/bs";
import Order from './Order';

const showOrders = (props) =>{
    let summa = 0
    props.orders.forEach(el => summa+=Number.parseFloat(el.price));
    return(
        <div>
            {props.orders.map(el =>(
                <Order deleteOrder={props.deleteOrder} key={el.id} item={el}/>
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}
const showNothing = () =>{
    return (<div className='empty'>
        <h2>Товара нет</h2>
    </div>)
}
export default function Header(props) {
    const [cartOpen,setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Spare parts store</span>
            <ul className='navigation'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <BsFillBasket3Fill  onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            {cartOpen && (
                <div className='shop-cart'> 
                        {props.orders.length > 0 ? showOrders(props):showNothing()}
                    
                </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
