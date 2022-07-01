
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import React from 'react'

const CartBtn = () => {

    //we get the state of addItems
    //Write the name of the file not the function

    const state = useSelector((state) => state.addItem)
    return (
        <div>
            <Link to="/cart">
                <span><img src="./Assets/Icons/shopping-bag.svg" />
                    <a>Cart ({state.length})</a></span>
            </Link>
        </div>
    )
}

export default CartBtn