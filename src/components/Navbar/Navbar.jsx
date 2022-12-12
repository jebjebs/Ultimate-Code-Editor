import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {

return (
    <>

        <Link to="/">
            <button id="">Home</button>
        </Link>
        <Link to="/themes">
            <button id="change-theme-button">Change Theme</button>
        </Link>
        
    </>
)
}

export default Navbar