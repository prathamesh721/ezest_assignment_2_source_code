import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from '../redux/actions/productsActions';


const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    console.log(state.handleCart);
    const dispatch = useDispatch()
    const cartItems = (cartItem) => {
        return(
            <div className='px-1'>
                <div>
                    <button></button>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--4'>
                            <img src={cartItem.img}/>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <>
    {state.length !== 0 && state.map(cartItems)}
    </>
  )
}

export default Cart;