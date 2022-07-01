import React, {useState} from "react";
// import { a } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heart from "../Assets/Icons/heart.svg"

const ProductComponent = ({products}) => {
  // const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;



//  useEffect(() => {
//     // Update the local storage using the browser API
//     localStorage.setItem('products', JSON.stringify(products))
//   });
 
    



    return (
      
      <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui a cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="heartImage"><img src={heart}/></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
