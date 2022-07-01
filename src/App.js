
import React from 'react';
import './App.css';
import BodyComponent from './components/BodyComponent';
import Footer from './components/Footer';
// import Header from './components/Header';

import HeroBanner from './components/HeroBanner';
import CartList from './components/cart/CartList';
import { Route, Switch } from 'react-router-dom'
import ProductDetails from "./components/ProductDetails";
// import Cart2 from './components/cart2';
import Cart from './components/Cart';
import Header2 from './components/Header2';

function App() {
  return (
    <React.Fragment>
      <Header2 />
      {/* <Header /> */}
      <Switch>
        <Route path="/product/:productId" component={ProductDetails} />
        <Route path='/' component={BodyComponent} />
        <Route path='/cart' component={Cart} />
        {/* <Route path='/cart' component={<YourCart />} /> */}
      </Switch>
        
      <Footer />
      {/* <CartList /> */}




    </React.Fragment>
  );
}

export default App;
