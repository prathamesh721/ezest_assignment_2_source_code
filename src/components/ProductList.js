import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowProduct from "./ShowProduct";
import LoadingSpinner from "./LoadingSpinner";
import slider from "../Assets/Icons/sliders.svg";
import layers from "../Assets/Icons/layers.svg";

//This component fetches product related data and passes to the ShowProduct component

const ProductPage = ({ sideBarToggleCopy, showSidebar }) => {
  const [products, setProducts] = useState([]);

  //Loading Spinner
  const [isLoading, setIsLoading] = useState(false);

  //Data fetching

  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        // console.log("Err: ", err);
      });
    setProducts(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //function for sidebar toggle

  const toggleSidebar = () => {
    sideBarToggleCopy(!showSidebar);
  };

  return (
    <React.Fragment>
      {isLoading ? <LoadingSpinner /> : ""}

      <div className="aem-Grid aem-Grid--12 produFilters">
        <div onClick={toggleSidebar}>
          <img src={slider} alt='slider icon'/>
          <label>Filter Results</label>
        </div>
        <div>
          <img src={layers} alt='layers icon'/>
          <label>Sort Products</label>
        </div>
      </div>

      <div className="aem-Grid aem-Grid--12 productListing">
        <ShowProduct products={products} />
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
