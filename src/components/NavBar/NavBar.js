import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/image/Logo/logoIn.jpg'
import close from '../../assets/image/Background/22.jpg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <div className="">
            <div className="navSection">
                <div className="navHead">
                    <div className="navbar">
                        <div className='brand_container'>
                            <Link to='/' className='brand'>
                            <img src={logo} alt="not found" />
                            </Link>
                            
                        </div>
                        <div className="links">
                            <ul>
                                <li className='active'>
                                
                                    <Link to ='/'>Home</Link>
                                </li>
                                <li>
                             
                                    <Link to ='/service'>Service</Link>
                                </li>
                                <li>
                              
                                    <Link to ='/portfolio'>Portfolio</Link>
                                </li>
                                <li>
                                 
                                    <Link to ='/nails'>Nails</Link>
                                </li>
                                <li>
                                 
                                    <Link to ='/hair'>hair</Link>
                                </li>
                                <li>
                                  
                                    <Link to ='/spa'>Spa</Link>
                                </li>
                                <li>
                             
                                    <Link to ='/contact'>Contact</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                    {/* body section start    */}

                    <div className="body">
                        <div className="bodyContent">
                            <div className="bodyInfo">
                                <span className='sortTitle'>Beauty and Spa Center</span>
                                <h1 className='titleOfWel'>Get Your Best Face <br />Glow With Us</h1>
                                <p className='descripBody'>Beauty salons may offer skin care services performed by estheticians, including facials, exfoliating scrubs and anti-aging techniques.</p>
                                <div className="subscriber">
                                    <input type="email" name="email" id="email" className="EmailField" placeholder='Your email address' autoComplete='off' />
                                    <motion.button className='btnSubs'
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        y: -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale:1,
                                        y: 0

                                    }}
                                    transition={{
                                        duration: 2
                                    }}


                                    >
                                        Subscriber
                                    </motion.button>

                                </div>


                            </div>
                            <div className="bodyImage">
                                <img src={close} alt="" />


                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default NavBar;