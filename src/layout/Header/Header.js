import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/Logo/logoIn.jpg'

const Header = () => {
    return (
        <div className='Header'>
            <div className="header">
                <div className='headerSub'>
                    <div className="header-main">
                        <div className="logoPart">
                            <a href="#"><img src={logo} alt="not available" /></a>
                        </div>
                        <div className="navLinks">
                            <ul className='nav_links'>

                                <li>
                                    
                                    <NavLink to='/'>Home</NavLink>
                                    <hr className='underline' size={10} />

                                    {/* <ul class="drop_menu">
                                        <li className='menu'>
                                            <NavLink to="/">Home Page 01</NavLink>

                                        </li>
                                        <li className='menu1'>
                                            <NavLink to="./page2">Home Page 02 </NavLink>
                                        </li>
                                    </ul> */}

                                </li>
                                <li><NavLink smooth duration={500} to="/service">Service</NavLink>
                                    <hr className='underline1' color='yellow' size={5} />

                                </li>

                                {/* <li>
                                    <NavLink to="/portfolio">Portfolio</NavLink>
                                    <hr className='underline1' color='yellow' size={5} />
                                    <ul class="drop_menu">
                                        <li className='menu'>
                                            <NavLink to="/services">Services</NavLink>
                                        </li>
                                        <li className='menu1'>
                                            <NavLink to="./servicesDetails">Services Details </NavLink>
                                        </li>
                                    </ul>
                                </li> */}
                                <li>
                                    <NavLink to="/portfolio">Portfolio</NavLink>
                                    <hr className='underline1' color='yellow' size={5} />
                                    {/* <ul class="drop_menu">
                                        <li className='menu'>
                                            <NavLink to="/portfolio">Portfolio</NavLink>
                                        </li>
                                        <li className='menu1'>
                                            <NavLink to="./portfolioDetails">Portfolio Details </NavLink>
                                        </li>
                                    </ul> */}
                                </li>
                                <li>
                                    <NavLink to="/nail">Nails</NavLink>
                                    <hr className='underline1' color='yellow' size={5} />
                                   
                                    {/* <ul class="drop_menu">
                                        <li className='menu'>
                                            <NavLink to="/blogs">Blogs</NavLink>
                                        </li>
                                        <li className='menu1'>
                                            <NavLink to="./blogsDetails">Blogs Details </NavLink>
                                        </li>
                                    </ul> */}
                                </li>
                                <li>
                                <NavLink to="/hair">hair</NavLink>
                                    <hr className='underline1' color='yellow' size={5} />
                                </li>
                                {/* <li><NavLink to="/spa">spa</NavLink>
                                    <hr className='underline1' color='yellow' size={5} />
                                </li> */}
                                <li><NavLink to="/contact">Contact</NavLink>
                                    <hr className='underline1' color='yellow' size={5} />
                                </li>


                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;