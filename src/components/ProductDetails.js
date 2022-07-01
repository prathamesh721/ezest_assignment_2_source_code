import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addCart,
  delCart
  
} from "../redux/actions/productsActions";
import share2 from "../Assets/Icons/share-2.svg"
import heart from '../Assets/Icons/heart.svg'
import minimize2 from "../Assets/Icons/minimize-2.svg"
import feather from "../Assets/Icons/feather.svg"
import maximize2 from "../Assets/Icons/maximize-2.svg"
import refresh from "../Assets/Icons/refresh-ccw.svg"


const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

 // Add product funtion
const addProduct = (product) => {
  dispatch(addCart(product));
}

const [cartBtn, setCartBtn] = useState('ADD TO CART')



  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <div className="aem-Grid aem-Grid--12 prodDetailsMain">
            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 prodDetailsAlign">
              <img className="ProdImg" src={image} />
              <div className="imgCarousal">
                <img className="ProdImg" src={image} />
                <img className="ProdImg" src={image} />
                <img className="ProdImg" src={image} />
                <img className="ProdImg" src={image} />
                <img className="ProdImg" src={image} />
              </div>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 prodDetailsText">
              <p className="content">Clothing / Women’s / Outerwear</p>
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3>{category}</h3>
              <p className="desc py-1">{description}</p>
              <div className="py-1">
                <label>Color</label>
                <div className="colorSwatches">
                  <div className="blue_box"></div>
                  <div className="pink_box"></div>
                  <div className="black_box"></div>
                  <div className="gray_box"></div>
                </div>
              </div>
              <div>
                <label>Size</label>
                <div className="outerSizeBox">
                  <div className="gray_outline_box">XS</div>
                  <div className="gray_outline_box">S</div>
                  <div className="gray_outline_box">M</div>
                  <div className="gray_outline_box">L</div>
                  <div className="gray_outline_box">XL</div>
                </div>
              </div>
              <div>
                <label>Quantity</label>
                <div className="quantityWrapper py-1">
                  <button>-</button>
                  <div className="quantityDiv">1</div>
                  <button>+</button>
                </div>
              </div>
              <div className="AddToCartWrapper">
                <button className="AddToCart" onClick={() => addProduct(product) }>ADD TO CART</button>
                <div className="AddToCartWrapperInner">
                  <img src={heart} />
                  <img src={share2} />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="aem-Grid aem-Grid--12 px-1">
            <h1>{title}</h1>
          </div>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 ">
              <label className="descLabel">Description</label>
              <p className="desc2">{description}</p>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
              <label>Details</label>
              <div className="detailsWrapper ">
                <div className="firstColumn">
                  <div className="detailsInner">
                    <img src={minimize2} />
                    <p>Sweat-wicking</p>
                  </div>
                  <div className="detailsInner">
                    <img src={feather} />
                    <p>Lightweight fabric</p>
                  </div>
                </div>
                <div className="secondColumn mx-1">
                  <div className="detailsInner">
                    <img src={maximize2} />
                    <p>Breathable</p>
                  </div>

                  <div className="detailsInner">
                    <img src={refresh} />
                    <p>69% nylon, 31% lycra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default ProductDetails;
