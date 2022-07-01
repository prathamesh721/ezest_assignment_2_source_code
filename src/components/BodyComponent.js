import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "../components/ProductListing";

import SideBar from "../components/SideBar";
import { Route, Switch } from "react-router-dom";
import HeroBanner from "./HeroBanner";

const BodyComponent = () => {

   //Sidebar Toggler

   const [sideBarToggle, setSideBarTogggle] = useState(true);

  
 
 
  return (
    <div className="aem-Grid aem-Grid--12 bodyComponent">
      <HeroBanner />

      <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
        <SideBar sideBarToggleCopy={setSideBarTogggle} showSidebar={sideBarToggle} />
      </div>

      <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
        <ProductListing sideBarToggleCopy={setSideBarTogggle} showSidebar={sideBarToggle}/>
        {/* <Switch>
          <Route path="/product" exact component={ProductListing} />
        </Switch> */}
      </div>
    </div>
  );
};

export default BodyComponent;
