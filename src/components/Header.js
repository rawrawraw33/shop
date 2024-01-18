import React, { useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Order1 } from './Order1';



const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order1 onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <p className='summa'>Summ : {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}


const showNothing = () => {
  return (
    <div className='empty'>
      <h2>В корзинці нічо нема</h2>
    </div>
  )
}

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
          <span className='logo'>Магазин Рітин Стиль</span>
          <ul className='nav'>
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Кабінет</li>
          </ul>
          <HiOutlineShoppingBag onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

          {cartOpen && (
            <div className='shop-cart'>
              {props.orders.length > 0 ? 
                showOrders(props) : showNothing()
              }
            </div>
          )}


        </div>
        <div className='presentation'>

      </div>
    </header>
  )
}
