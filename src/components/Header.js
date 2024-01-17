import React, { useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Order1 } from './Order1';



const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order1 key={el.id} item={el}/>
      ))}
    </div>
  )
}


const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Nothing to show</h2>
    </div>
  )
}

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
          <span className='logo'>House Staff</span>
          <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
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
