import React from 'react'
import instagram from '../Assets/Icons/instagram.svg';
import facebook from '../Assets/Icons/facebook.svg'
import twitter from '../Assets/Icons/twitter.svg'
import Logo from "../Assets/Logo.PNG"
const Footer = () => {

    return (
        <footer>
            <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <ul>
                        <li><a href='#'><strong>Account</strong></a></li>
                        <li><a href='#'>Sign In</a></li>
                        <li><a href='#'>Register</a></li>
                        <li><a href='#'>Order Status</a></li>
                    </ul>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 ">
                    <ul>
                        <li><a href='#'><strong>About Us</strong></a></li>
                        <li><a href='#'>Our Story</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li style={{ visibility: 'hidden' }}>hide</li>

                    </ul>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <ul>
                        <li><a href='#'><strong>Help</strong></a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Order Status</a></li>
                        <li><a href='#'>Returns</a></li>
                    </ul>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <ul>
                        <li><a href='#'><strong>Follow Us!</strong></a></li>
                        <li >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</li>
                        <div>
                        <a href='#'><img src={instagram} className='footerIcons' /></a>
                        <a href='#'><img src={facebook} className='footerIcons' /></a>
                        <a href='#'><img src={twitter} className='footerIcons' /></a> 
                        </div>
                    </ul>
                </div>
            </div>
            <div className='lowerFooter'>
            <a href='/'><img src={Logo} /></a>
                <p>&copy; Company Name Address Ave, City Name, State ZIP</p>
                <ul>
                    <li><a href='#'>Terms of Use</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;