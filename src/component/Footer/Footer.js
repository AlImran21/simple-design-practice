import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.Module.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="col-1">
                <h3>USEFUL LINKS</h3>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='shop'>Shop</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div className="col-2">
                <h3>NEWSLETTER</h3>
                <form >
                    <input type="email" name="email" placeholder='Your Email Address' required />
                    <br />
                    <button>SUBSCRIBE NOW</button>
                </form>
            </div>
            <div className="col-3">
                <h3>CONTACT</h3>
                <p>123, XYZ Road, BSK 3 <br />Patenga, Chattogram, BD </p>
                <div className="social-icons">
                    <i className="fa fa-spinner fa-spin"></i>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-behance"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;