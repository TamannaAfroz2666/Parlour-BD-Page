import React from 'react';
import './HeadPage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeadPage = () => {
    return (
        <div className='headPage'>
            <div className="portfolio_body">
                <div className="portfolio_Content">
                    <motion.div
                        className="title_content"
                        initial={{ opacity: 0, x: '-100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}

                    >
                        <h2 className='title'>Contact us</h2>
                    </motion.div>
                    <div className="nav_content">
                        <ul className='headLink'>
                            <li> <Link className='linkTitle' to='/'>Home </Link> </li>
                            <span className='linkTitle'>/</span>
                            <li> <Link className='linkTitle' to='/portfolio'>Portfolio gallery</Link> </li>
                        </ul>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default HeadPage;