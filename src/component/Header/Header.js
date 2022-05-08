import React from 'react';
import './Header.Module.css';
import Logo from '../../images/logo.png';
import UserImage from '../../images/user.png';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={Logo} alt="" />
                <ul>
                    <li><Link to='/home'>Header</Link></li>
                    <li><Link to='/popUp'>PopUp</Link></li>
                    <li><Link to='/footer'>Footer</Link></li>
                    <li><Link to='/kids'>Kids</Link></li>
                    <li><Link to='/living'>Home & Living</Link></li>
                </ul>
            </nav>

            <div className='text-box'>
                <h1>Great Discount On Latest Collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque quod quia, iure tempora nobis magni aperiam <br /> provident maxime nisi vitae.</p>
                <button className='shop-now-button'>Shop Now</button>
            </div>

            <div className="user-box">
                <img src={UserImage} alt="" />
            </div>

        </div>

    );
};

export default Header;