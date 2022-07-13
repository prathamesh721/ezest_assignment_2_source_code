import React from "react";
import BodyComponent from "./components/BodyComponent";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Header2 from "./components/Header2";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <React.Fragment>
      <Header2 />

      <Routes>
        <Route
          path="/ezest_assessment_2_v2/product/:productId" exact
          element={<ProductDetails />}
        />
        <Route path="/ezest_assessment_2_v2/cart" exact element={<ShoppingCart />} />
        <Route path="/" exact element={<BodyComponent />} />
        
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
