import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/image/Logo.jpg'
import close from '../../assets/image/Background/22.jpg'
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
              {/* body section start    */}

            <div className="body">
                <div className="bodyContent">
                    <div className="bodyInfo">
                        <span className='sortTitle'>Beauty and Spa Center</span>
                        <h1>Get Your Best Face <br />Glow With Us</h1>
                        <p>Beauty salons may offer skin care services performed by estheticians, including facials, exfoliating scrubs and anti-aging techniques.</p>
                        <div className="subscriber">
                            <input type="email" name="email" id="email" className="EmailField" placeholder='Your email address' autoComplete='off'/>
                            <button className='btnSubs'>Subscriber</button>

                        </div>


                    </div>
                    <div className="bodyImage">
                        <img src={close} alt="" />


                    </div>
                </div>
            </div>
            </div>


        </div>


    );
};

export default NavBar;