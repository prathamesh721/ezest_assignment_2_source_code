import React from "react";
import BodyComponent from "./components/BodyComponent";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Header2 from "./components/Header2";

function App() {
  return (
    <React.Fragment>
      <Header2 />

      <Routes>
        <Route
          path="/ezest_assessment_2_v2/product/:productId"
          element={<ProductDetails />}
        />
        <Route path="/ezest_assessment_2_v2" element={<BodyComponent />} />
        <Route path="/ezest_assessment_2_v2/cart" element={<ShoppingCart />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
