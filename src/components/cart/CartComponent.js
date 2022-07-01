import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartComponent = () => {
    const cartItems = useSelector((state) => state.allCartItems.cartItems);
    const renderList = cartItems.map((cartItem) => {
        const { id, userId, date, products, image } = cartItem;

        return (

            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6" key={id}>
                <Link to={`/cartItem/${id}`}>
                    <div cartItem="ui a cards">
                        <div className="card">

                            <div className="content">
                                <img src={image} />
                                <div className="header">{userId}</div>
                                <div className="meta price">$ {date}</div>
                                <div> {products.map(product => {
                                    return (<div><span>{product.productId}</span>
                                        <span>{product.quantity}</span> </div>)
                                })}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default CartComponent;