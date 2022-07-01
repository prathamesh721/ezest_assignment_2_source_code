import React from 'react';

import leggings from '../Assets/leggings.png';
import sportsb from '../Assets/sportsb.png';
import PP_BTN from '../Assets/PP_BTN.png';
import checkout from '../Assets/checkout.png';
import chevrondown from '../Assets/chevron-down.svg';
import minuscircle from '../Assets/minus-circle.svg';
import pluscircle from '../Assets/plus-circle.svg';
import square from '../Assets/square.svg';
import edit2 from '../Assets/edit-2.svg';
import trash2 from '../Assets/trash-2.svg';
import heart from '../Assets/heart.svg';
import{ useSelector } from "react-redux";



// import {incNumber , decNumber } from '../redux/actions/productsActions';
// import {
//   useDispatch , useSelector
// } from 'react-redux';

function ShoppingCart() 
{
  const shoppingbagitem = useSelector((Value) => Value.handlecartSlice.items);
  // const myState = useSelector((state)=>state.changeTheNumber);
  // const dispatch = useDispatch();
  return (
    <section>
      <div className='aem-Grid aem-Grid--12 shop-head'>
        <h1>Your Shopping Bag</h1>
        <div className='bottom-line'></div>
      </div>


      <div className='aem-Grid aem-Grid--12'>
        <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4'>
          <div className='aem-Grid aem-Grid--4'>
            <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--2 '>
              
              {shoppingbagitem.map(val=>{return(<div className='shopping-cart'>
                <img src={val.image}/>
              </div>)})}
            </div>
            <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--2 prod-details'>
              

             
               
              {shoppingbagitem.map(val=>{return(<div className='aem-GridColumn aem-GridColumn--default--6 cart-details'>
              <h1>{val.title}</h1>
              <p>Size : Medium</p>
              <p>Color : Storm</p>
              <p>${val.price}</p>
              
              
              </div>)})}

            </div>
          </div>

        </div>

        <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4'>
          <div className='aem-Grid aem-Grid--4'>
            <div className='aem-GridColumn aem-GridColumn--default--2'>
               <div className='cart-btn'>
                   <button>+</button>
                   <input type="text" id='' name='' className='cart-input'/>
                   <button>-</button>
               </div>
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--2'>
             <div><img src={edit2}/><span>Edit item</span></div>
             <div> <img src={trash2}/><span>Remove</span></div>
             <div> <img src={heart}/><span>Save for later</span></div>
            </div>
          </div>

          
        </div>



        <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4 cart-total'>
          <div className='aem-Grid aem-Grid--4'>
            <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--2'>
              <h3>Pricing Summary</h3>
              <ul>
                <li>Subtotal</li>
                <li>Coupon</li>
                <li>Gift Card</li>
                <li>Estimated tax</li>
                <li>Estimated shipping</li>
                <h3>Estimated Total</h3>
              </ul>
            </div>
            <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--2'>

              <ul>
                <li></li>
                <li>$ 388.00</li>
                <li>- $ 77.60</li>
                <li>- $ 100.00</li>
                <li>$ 23.28</li>
                <li>FREE</li>
                <h3>$ 233.68</h3>
              </ul>
            </div>

          
            <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4 check'>
              <img src={checkout} />
            </div>
            <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4'>
              <img src={PP_BTN} />
            </div>
          </div>
         </div>
      </div>

      <div className='aem-Grid aem-Grid--12'>
        <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--8'>
          <button class="accordion">Estimate your Shipping <span>shipping to 91001 <img src={chevrondown}/> </span></button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button class="accordion">Enter a Coupon Code<span>20%discount applied <img src={chevrondown}/></span></button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button class="accordion">Apply Gift Card </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>

     
     
    </section>
  )
}

export default ShoppingCart