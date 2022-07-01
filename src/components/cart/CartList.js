import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setCartItems} from '../../redux/actions/productsActions'
import CartComponent from "./CartComponent";


const CartList = () => {
    const cartItems = useSelector((state) => state.allCartItems.cartItems);
    const dispatch = useDispatch();

    const fetchCartItems = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/carts")
          .catch((err) => {
            console.log("Err: ", err);
          });
          
        dispatch(setCartItems(response.data));
        console.log(response.data);
      };
      

      useEffect(() => {
        fetchCartItems();
      }, []);

      return (
        <div className="aem-Grid aem-Grid--12 productListing">
         
          <CartComponent />
        </div>
      );
}

export default CartList;