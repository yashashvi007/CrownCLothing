import React from 'react'

import Button  from './../custom-button/custom-button'

import './cart-dropdown.scss'

const CartDropDown = ()=>(
    <div className='cart-dropdown' >
      <div className='cart-items' />
      <Button>Got to checkout</Button>
    </div>
)

export default CartDropDown;