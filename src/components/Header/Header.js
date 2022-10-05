import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
                <Link to='/login'>Log in</Link>
            </nav>
            <p>Common Header</p>
        </div>
    );
};

export default Header;