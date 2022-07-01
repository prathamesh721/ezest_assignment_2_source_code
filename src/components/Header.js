import React, {useState} from 'react'
import logo from '../Assets/Logo.PNG'
import search from '../Assets/Icons/search.svg'
import user from '../Assets/Icons/user.svg'
import shoppingBag from "../Assets/Icons/shopping-bag.svg"
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
    
function Header() {
    const state = useSelector((state) => state.handleCart)
    const navItem = ["Women", "Men", "Smart Gear", "Accessories"];

    const [isShow, setShow] = useState(true);
    const [isActive, setActive] = useState(false);
    const hideInput = () => {
        setShow(!isShow);
    }

    const navSlide = () => {
        setActive(!isActive)
    }
    return (
        <React.Fragment>
            <header>
                <button className="burger" onClick={() => navSlide}>
                    <div id="line1"></div>
                    <div id="line2"></div>
                    <div id="line3"></div>
                </button>
               <span>
               <img src={logo} className={isShow ? null :  'hideLogo'} width={100}/>
               </span>
                <nav>
                    <ul>
                        {
                            navItem.map((item) => {
                                return <li>{item}</li>
                            })
                        }
                    </ul>
                </nav>


                <span className="endHeader">
                 
                    <img src={search} onClick={hideInput} />
                    <label for='searchBar' className="textHide">Search</label>
                    <img src={user} className="userIcon"/>
                    <a className="textHide">Sign in</a>
                    <Link to="/cart" >
                    <img src={shoppingBag} />
                    <a>Cart({state.length})</a>
                    </Link>
                </span>
            </header>
        </React.Fragment>
    )
}

export default Header