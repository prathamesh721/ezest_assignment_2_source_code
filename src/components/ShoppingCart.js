import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import arrowLeft from '../Assets/Icons/arrow-left-circle.svg'
import PP_BTN from '../Assets/PP_BTN/PP_BTN.png';
import lock from '../Assets/Icons/lock.svg';
import chevrondown from "../Assets/Icons/chevron-down.svg";
import edit2 from "../Assets/Icons/edit-2.svg";
import trash2 from "../Assets/Icons/trash-2.svg";
import heart from "../Assets/Icons/heart.svg";


function ShoppingCart() {
  const shoppingbagitem = useSelector((Value) => Value.handlecartSlice.items);

  return (
    <section className="shoppingCart customContainer">
      <div className="aem-Grid aem-Grid--12 shop-head">
        <h1>Your Shopping Bag</h1>
        <div className="bottom-line"></div>
      </div>
      {shoppingbagitem.length === 0 ? (
        <div className="cart_empty">
          <p>Sorry! Your cart is empty</p>
          <Link to="/ezest_assessment_2_v2">
            <div className="start_shopping">

              <img src={arrowLeft} />
              <span>Start Shopping</span>

            </div>
          </Link>
        </div>

      ) : (
        <>
          <div className="aem-Grid aem-Grid--12 shoppingBagWrapper">
            {/* ==============8 column inner grid starts==========*/}

            {shoppingbagitem.map((val) => {
              return (
                <React.Fragment>
                  <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 leftSideCart">
                    <div className="shopping-cart">
                      <img src={val.image} className="prodImg" />
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--6 cart-details">
                      <h1>{val.title}</h1>
                      <p>Size : Medium</p>
                      <p>Color : Storm</p>
                      <p>${val.price}</p>
                    </div>

                    <div className="sharingOuter">
                      <div className="py-1 cartBtn">
                        <button>-</button>
                        <div className="quantityDiv">1</div>
                        <button>+</button>
                      </div>

                      <div className="sharingOption">
                        <div className="sharingInner">
                          <img src={edit2} alt='edit icon' />
                          <span> Edit item</span>
                        </div>
                        <div className="sharingInner">
                          <img src={trash2} alt='sharing icon' />
                          <span> Remove</span>
                        </div>
                        <div className="sharingInner">
                          <img src={heart} alt='heart icon' />
                          <span> Save for later</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>

              );
            })}

            {/* ==============8 column inner grid ends==========*/}

            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 pricingSummary">

              <div className="cartSummary">
                <div>
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
                <div>
                  <h3 className="blankHeader">""</h3>
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
              </div>

              <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4 check">
                <button className="checkOutBtn"><img src={lock} alt='lock icon' />CHECKOUT</button>
              </div>
              <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4">
                <img src={PP_BTN} alt='payment gateway' />
              </div>

            </div>
          </div>

          {/*========================= Bottom Section =============== */}

          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--8">
              <button class="accordion">
                <p> Estimate your Shipping{" "}</p>
                <span>
                  shipping to 91001 <img src={chevrondown} alt='dropdown icon' />{" "}
                </span>
              </button>


              <button class="accordion">
                <p> Enter a Coupon Code</p>
                <span>
                  20%discount applied <img src={chevrondown} alt='dropdown icon' />
                </span>
              </button>


              <button class="accordion">
                <p>Apply Gift Card </p>
                <img src={chevrondown} alt='dropdown icon' />
              </button>

            </div>
          </div>
        </>

      )}

    </section >
  );
}

export default ShoppingCart;
