import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/image/Logo.jpg'
const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <div className="navSection">
            <div className="navHead">


                <div className="navbar">
                    <div className='brand_container'>
                        <a href="#" className='brand'>
                            <img src={logo} alt="not found" />
                        </a>
                        <div className="toggle">

                        </div>
                    </div>
                    <div className="links">
                        <ul>
                            <li className='active'>
                                <a href="/home"> Home</a>
                            </li>
                            <li>
                                <a href="/services"> Services</a>
                            </li>
                            <li>
                                <a href="/portfolio"> Portfolio</a>
                            </li>
                            <li>
                                <a href="/blog"> Blog</a>
                            </li>
                            <li>
                                <a href="/skills"> Skills</a>
                            </li>
                            <li>
                                <a href="/contact"> Contact</a>
                            </li>
                            <li>
                                <a href="/home"> Home</a>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

        </div>


    );
};

export default NavBar;