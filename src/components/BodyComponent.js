import React, { useState } from "react";
import ProductPage from "../components/ProductList";
import SideBar from "../components/SideBar";
import HeroBanner from "./HeroBanner";

const BodyComponent = () => {

  //Sidebar Toggler
  const [sideBarToggle, setSideBarTogggle] = useState(true);

  return (
    <div className="aem-Grid aem-Grid--12 bodyComponent">
      <HeroBanner />

      <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
        <SideBar
          sideBarToggleCopy={setSideBarTogggle}
          showSidebar={sideBarToggle}
        />
      </div>

      <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
        <ProductPage
          sideBarToggleCopy={setSideBarTogggle}
          showSidebar={sideBarToggle}
        />
      </div>
    </div>
  );
};

export default BodyComponent;
