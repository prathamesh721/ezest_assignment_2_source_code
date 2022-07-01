import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import slider from '../Assets/Icons/sliders.svg'
import layers from '../Assets/Icons/layers.svg'

const ProductPage = ({sideBarToggleCopy, showSidebar}) => {
  const [products,setProducts] = useState([]);

  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        // console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 
  const toggleSidebar = () => {
    sideBarToggleCopy(!showSidebar);
   
  }

  // console.log("Products :", products);
  return (
    <React.Fragment>
      <div className="aem-Grid aem-Grid--12 produFilters">
        <div onClick={toggleSidebar}>
          <img src={slider} />
          <label>Filter Results</label>
        </div>
        <div>
          <img src={layers} />
          <label>Sort Products</label>
        </div>
      </div>

      <div className="aem-Grid aem-Grid--12 productListing">
        <ProductComponent products={products}/>
      </div>
    </React.Fragment>

  );
};

export default ProductPage;
